import { Button } from "@niva/ui";
import { render, screen } from "@testing-library/react";

const classes = {
  primary:
    "bg-bg-brand border border-border-brand !text-text-brand-on-brand hover:bg-bg-brand-hover",
  neutral:
    "bg-bg-neutral-tertiary border border-border-neutral-secondary !text-text-default hover:bg-bg-neutral-tertiary-hover",
  subtle:
    "!text-bg-neutral border border-[#fff] hover:border hover:border-border-default",
  sm: "px-2 py-2 text-body-small leading-none",
  md: "px-3 py-3 text-body-base leading-4",
  disabled:
    "border-bg-disabled border text-text-disabled-on-disabled bg-bg-disabled hover:bg-bg-disabled",
};

describe("Button Component", () => {
  it("renders primary button correctly", () => {
    render(<Button>Default</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Default");
    // It has primary calss names
    const classList = classes.primary.split(" ");
    classList.forEach((className) => {
      expect(button).toHaveClass(className);
    });
    // It has default md size
    const mdClassList = classes.md.split(" ");
    mdClassList.forEach((className) => {
      expect(button).toHaveClass(className);
    });
    expect(button).not.toBeDisabled();
  });

  it("renders neutral button correctly", () => {
    render(<Button variant="neutral">Neutral</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Neutral");
    const classList = classes.neutral.split(" ");
    classList.forEach((className) => {
      expect(button).toHaveClass(className);
    });
    expect(button).not.toBeDisabled();
  });

  it("renders subtle button correctly", () => {
    render(<Button variant="subtle">Subtle</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Subtle");
    const classList = classes.subtle.split(" ");
    classList.forEach((className) => {
      expect(button).toHaveClass(className);
    });
    expect(button).not.toBeDisabled();
  });

  it("renders small button correctly", () => {
    render(<Button size="sm">Small</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Small");
    const classList = classes.sm.split(" ");
    classList.forEach((className) => {
      expect(button).toHaveClass(className);
    });
    expect(button).not.toBeDisabled();
  });

  it("renders disable button correctly", () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Disabled");
    const classList = classes.disabled.split(" ");
    classList.forEach((className) => {
      expect(button).toHaveClass(className);
    });
    expect(button).toBeDisabled();
  });
});
