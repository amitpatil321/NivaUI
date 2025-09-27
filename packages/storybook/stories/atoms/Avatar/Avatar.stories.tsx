import { Avatar } from "@niva/ui";
import { Meta, StoryObj } from "@storybook/react-vite";
import { User } from "lucide-react";

const meta = {
  title: "Components/Atoms/Avatar",
  component: Avatar,
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Variants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Avatar shape={"square"} />
      <Avatar shape={"circle"} />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-2">
      <Avatar shape={"square"} size="sm" icon={<User />} />
      <Avatar shape={"square"} icon={<User />} />
      <Avatar shape={"square"} size="lg" icon={<User />} />
    </div>
  ),
};

export const WithImage: Story = {
  render: () => (
    <div className="flex gap-2">
      <div className="flex gap-2">
        <Avatar
          size="sm"
          src="https://randomuser.me/api/portraits/men/11.jpg"
        />
        <Avatar src="https://randomuser.me/api/portraits/men/12.jpg" />
        <Avatar
          size="lg"
          src="https://randomuser.me/api/portraits/men/13.jpg"
        />
      </div>
    </div>
  ),
};
export const AvatarGroupSpaced: Story = {
  render: () => (
    <div className="flex flex-col justify-center items-center gap-8 pt-10">
      <Avatar.Group layout="spaced">
        <Avatar src="https://randomuser.me/api/portraits/men/21.jpg" />
        <Avatar src="https://randomuser.me/api/portraits/men/22.jpg" />
        <Avatar src="https://randomuser.me/api/portraits/men/23.jpg" />
        <Avatar src="https://randomuser.me/api/portraits/men/24.jpg" />
      </Avatar.Group>
    </div>
  ),
};

export const AvatarGroupOverlap: Story = {
  render: () => (
    <div className="flex flex-col justify-center items-center gap-8 pt-10">
      <Avatar.Group layout="overlap">
        <Avatar src="https://randomuser.me/api/portraits/men/41.jpg" />
        <Avatar src="https://randomuser.me/api/portraits/men/42.jpg" />
        <Avatar src="https://randomuser.me/api/portraits/men/43.jpg" />
        <Avatar src="https://randomuser.me/api/portraits/men/44.jpg" />
        <Avatar src="https://randomuser.me/api/portraits/men/45.jpg" />
      </Avatar.Group>
    </div>
  ),
};

export const AvatarBlock: Story = {
  render: () => (
    <div className="flex justify-center items-center gap-4 pt-10 w-72">
      <Avatar.Block
        title="Prateek Patil"
        description="More people than ever are building component driven UIs"
      >
        <Avatar
          size="lg"
          src="https://randomuser.me/api/portraits/men/32.jpg"
        />
      </Avatar.Block>
    </div>
  ),
};
