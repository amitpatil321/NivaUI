import { Dialog } from "@niva/ui";
import { fireEvent, screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { vi } from "vitest";

beforeEach(() => {
  HTMLDialogElement.prototype.showModal = vi.fn();
  HTMLDialogElement.prototype.close = vi.fn();
});

describe("Dialog component", () => {
  it("Renders Dialog component correctly", () => {
    render(
      <Dialog open={true} title="Test Dialog" onClose={vi.fn()}>
        Test Content
      </Dialog>
    );
    expect(screen.getByTestId("dialog")).toBeInTheDocument();
  });

  it("Renders header and content correctly", () => {
    render(
      <>
        <Dialog open={true} title="Test Dialog" onClose={vi.fn()}>
          Test Content
        </Dialog>
      </>
    );
    const dialog = screen.getByTestId("dialog");
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveTextContent("Test Dialog");
    expect(dialog).toHaveTextContent("Test Content");
  });

  it("Doesn't show dialog when open prop is true", () => {
    render(
      <>
        <Dialog open={false} title="Test Dialog" onClose={vi.fn()}>
          Test Content
        </Dialog>
      </>
    );

    const dialog = screen.getByTestId("dialog") as HTMLDialogElement;
    expect(dialog.hasAttribute("open")).toBe(false);
  });

  it("Closes dialog when close button is clicked", () => {
    render(
      <>
        <Dialog open={true} title="Test Dialog" onClose={vi.fn()}>
          Test Content
        </Dialog>
      </>
    );

    const dialog = screen.getByTestId("dialog") as HTMLDialogElement;
    const close = screen.getByTestId("close-button");
    fireEvent.click(close);
    expect(dialog.hasAttribute("open")).toBe(false);
  });
});
