import { Button } from "@niva/ui";
import { Meta, StoryObj } from "@storybook/react-vite";
import { HomeIcon } from "lucide-react";

const meta = {
  title: "Components/Atoms/Button/Icon",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "neutral", "subtle"],
      defaultValue: "Primary",
    },
    disabled: {
      control: "boolean",
      type: "boolean",
      defaultValue: false,
    },
    size: {
      control: "radio",
      options: ["sm", "md"],
      defaultValue: "md",
    },
  },
  args: {
    variant: "primary",
    size: "md",
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

// const HomeIcon = () => (
//   <svg
//     width="800px"
//     height="800px"
//     viewBox="0 0 16 16"
//     xmlns="http://www.w3.org/2000/svg"
//     xmlnsXlink="http://www.w3.org/1999/xlink"
//     // {...props}
//   >
//     <path
//       fill="#444"
//       d="M8 1.4l-2 1.3v-1.7h-2v3l-4 2.6 0.6 0.8 7.4-4.8 7.4 4.8 0.6-0.8z"
//     />
//     <path fill="#444" d="M8 4l-6 4v7h5v-3h2v3h5v-7z" />
//   </svg>
// );

export const Primary: Story = {
  args: {
    kind: "icon",
    children: <HomeIcon />,
  },
};
