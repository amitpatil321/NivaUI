import { cva } from "class-variance-authority";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import Button from "../../atoms/Button/Button";

import { X } from "lucide-react";
import "./Dialog.css";

const dialogClasses = cva("");

interface DialogProps {
  open: boolean;
  title: string | React.ReactNode;
  children: string | React.ReactNode;
  onClose?: () => void;
  onConfirm?: () => void;
}

const Dialog = ({ open, title, children, onClose, onConfirm }: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const modalElement = dialogRef.current;
    if (modalElement) {
      if (open) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [open]);

  return (
    <dialog
      data-testid="dialog"
      ref={dialogRef}
      className={twMerge(
        dialogClasses(),
        "shadow-ds-400 text-text-default p-8 rounded-lg",
        "w-[90%]",
        "max-w-sm",
        "sm:max-w-md",
        "md:max-w-lg",
        "lg:max-w-xl",
        "xl:max-w-2xl"
      )}
      role="dialog"
      aria-modal="true"
      onCancel={onClose}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-heading text-text-default">{title}</h2>
          <X
            onClick={onClose}
            data-testid="close-button"
            className="cursor-pointer"
            size="20"
          />
        </div>
        <p className="text-body-base">{children}</p>
        <form
          method="dialog"
          className="flex sm:flex-row flex-col justify-end gap-4"
        >
          <Button
            variant="neutral"
            className="w-full sm:w-auto"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            className="w-full sm:w-auto"
            variant="primary"
            onClick={onConfirm}
          >
            Confirm
          </Button>
        </form>
      </div>
    </dialog>
  );
};

export default Dialog;
