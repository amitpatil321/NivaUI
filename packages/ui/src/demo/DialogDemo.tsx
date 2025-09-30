import { useState } from "react";
import Button from "../components/atoms/Button/Button";
import Dialog from "../components/molecule/Dialog/Dialog";

const DialogDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row gap-4">
      <Button variant="neutral" onClick={() => setIsOpen(true)}>
        Open
      </Button>
      <Button variant="neutral" onClick={() => setIsOpen(false)}>
        Close
      </Button>
      <Dialog
        open={isOpen}
        title="Confirm Delete"
        onClose={() => setIsOpen(false)}
      >
        When requiring users to interact with the application, but without
        jumping to a new page and interrupting the user's workflow, you can use
        Modal to create a new floating layer over the current page to get user
        feedback or display information. Additionally, if you need show a simple
        confirmation dialog, you can use antd.Modal.confirm(), and so on.
      </Dialog>
    </div>
  );
};

export default DialogDemo;
