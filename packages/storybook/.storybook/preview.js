/** @type { import('@storybook/react-vite').Preview } */

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
  },
};

export default preview;
