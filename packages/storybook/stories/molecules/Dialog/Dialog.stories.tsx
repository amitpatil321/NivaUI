import { Button, Dialog, Tag } from "@niva/ui";
import { StoryObj } from "@storybook/react-vite";
import { useState } from "react";

const meta = {
  title: "Components/Molecules/Dialog",
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Demo: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const onClose = () => {
      setOpen(false);
      alert("Closed");
    };

    const onConfirm = () => {
      alert("Confirmed");
      setOpen(false);
    };

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Dialog
          open={open}
          onClose={onClose}
          onConfirm={onConfirm}
          title="Dialog Title"
        >
          Dialog Content!
        </Dialog>
      </>
    );
  },
};
