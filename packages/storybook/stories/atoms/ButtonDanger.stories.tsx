import { Button } from "@niva/ui";
import { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Atoms/Button/Danger",
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

export const Default = {
  args: {
    kind: "danger",
    variant: "primary",
    children: "Danger",
  },
};

export const Subtle = {
  args: {
    kind: "danger",
    variant: "subtle",
    children: "Button",
  },
};
