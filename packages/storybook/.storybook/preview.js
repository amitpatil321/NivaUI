/** @type { import('@storybook/react-vite').Preview } */
import { themes } from "@storybook/theming";
import "./tailwind.css";

const preview = {
  parameters: {
    layout: "centered",
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: {
        contentsSelector: ".sbdocs-content",
        headingSelector: "h1, h2, h3",
        ignoreSelector: "#primary",
        title: "Table of Contents",
        disable: false,
        unsafeTocbotOptions: {
          orderedList: false,
        },
      },
    },
    darkMode: {
      stylePreview: true,
      dark: { ...themes.dark },
      light: { ...themes.light },
      darkClass: "dark",
      lightClass: "light",
      current: "light",
      classTarget: "body",
    },
  },
};

export default preview;
