import { Button } from "@niva/ui";
import { Meta, StoryObj } from "@storybook/react-vite";
import { HomeIcon, Pencil, Settings } from "lucide-react";

const meta = {
  title: "Components/Atoms/Button",
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

export const Variants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button variant="primary">Primary</Button>
      <Button variant="neutral">Secondary</Button>
      <Button variant="subtle">Neutral</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button size={"sm"}>Small</Button>
      <Button size={"md"} variant="primary">
        Medium
      </Button>
    </div>
  ),
};

export const Danger: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex gap-2">
        <Button kind={"danger"} variant="primary">
          Primary
        </Button>
        <Button kind={"danger"} variant="subtle">
          Subtle
        </Button>
      </div>
      <div className="flex gap-2">
        <Button kind={"danger"} size={"sm"} variant="primary">
          Primary
        </Button>
        <Button kind={"danger"} size="sm" variant="subtle">
          Subtle
        </Button>
      </div>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button variant="primary" kind={"icon"}>
        <HomeIcon />
      </Button>
      <Button variant="neutral" kind={"icon"}>
        <Pencil />
      </Button>
      <Button variant="subtle" kind={"icon"}>
        <Settings />
      </Button>
    </div>
  ),
};
