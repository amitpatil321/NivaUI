import { Tag } from "@niva/ui";
import { StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/atoms/Tag",
  component: Tag,
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Primary: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tag variant="primary" color="brand">
        Brand
      </Tag>
      <Tag variant="primary" color="danger">
        Danger
      </Tag>
      <Tag variant="primary" color="positive">
        Positive
      </Tag>
      <Tag variant="primary" color="warning">
        Warning
      </Tag>
      <Tag variant="primary" color="neutral">
        Neutral
      </Tag>
    </div>
  ),
};

export const Secondary: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tag variant="secondary" color="brand">
        Brand
      </Tag>
      <Tag variant="secondary" color="danger">
        Danger
      </Tag>
      <Tag variant="secondary" color="positive">
        Positive
      </Tag>
      <Tag variant="secondary" color="warning">
        Warning
      </Tag>
      <Tag variant="secondary" color="neutral">
        Neutral
      </Tag>
    </div>
  ),
};

export const Inactive: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tag variant="secondary" color="positive">
        Positive - Active
      </Tag>
      <Tag state="inactive">Danger - Inactive</Tag>
    </div>
  ),
};
