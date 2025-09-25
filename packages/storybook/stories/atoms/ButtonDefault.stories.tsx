import { Button } from "@niva/ui";
import { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Atoms/Button/Default",
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

export const Primary = {
  args: {
    children: "Primary",
  },
};

export const Neutral = {
  args: {
    variant: "neutral",
    children: "Neutral",
  },
};

export const Subtle = {
  args: {
    variant: "subtle",
    children: "Subtle",
  },
};
