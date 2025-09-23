import { createRequire } from "module";
import { dirname, join } from "path";
import { mergeConfig } from "vite";
const require = createRequire(import.meta.url);

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-docs"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@niva/ui": new URL("../../ui/", import.meta.url).pathname,
        },
      },
      // optimizeDeps: {
      //   // Add your monorepo packages here
      //   include: [getAbsolutePath("@niva/ui")],
      // },
      // webpackFinal: async (config, { configType }) => {
      //   config.resolve.alias = {
      //     ...config.resolve.alias,
      //     "@niva/ui": path.resolve(__dirname, "../../ui/"),
      //   };
      //   return config;
      // },
    });
  },
};
export default config;
