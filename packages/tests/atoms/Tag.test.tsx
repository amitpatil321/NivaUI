import { Tag } from "@niva/ui";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

const color = {
  brand:
    "bg-bg-brand border-icon-brand-on-brand text-text-brand-on-brand hover:bg-bg-brand-hover",
  danger:
    "bg-bg-danger border-icon-danger-on-danger text-text-danger-on-danger hover:bg-bg-danger-hover",
  positive:
    "bg-bg-positive hover:bg-bg-positive-hover border-icon-positive-on-positive text-text-positive-on-positive",
  warning:
    "text-text-warning-on-warning hover:bg-bg-warning-hover border-icon-warning bg-bg-warning",
  neutral:
    "border-icon-default text-text-default bg-bg-default-tertiary hover:bg-bg-default-tertiary-hover",
};

describe("Tag component", () => {
  it("Renders tag component correctly", () => {
    render(<Tag>Tag 1</Tag>);
    const tag = screen.getByTestId("tag");
    const tagClose = screen.getByTestId("tag-close");
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveTextContent("Tag 1");
    expect(tagClose).toHaveClass("close");
  });

  (Object.keys(color) as Array<keyof typeof color>).forEach((key) => {
    it(`Renders primary ${key} tag component correctly`, () => {
      render(
        <Tag variant="primary" color={key}>
          Tag
        </Tag>
      );
      const tag = screen.getByTestId("tag");
      const classes = color[key].split(" ");
      classes.forEach((className) => {
        expect(tag).toHaveClass(className);
      });
    });
  });

  (Object.keys(color) as Array<keyof typeof color>).forEach((key) => {
    it(`Renders secondary ${key} tag component correctly`, () => {
      render(
        <Tag variant="primary" color={key}>
          Tag
        </Tag>
      );
      const tag = screen.getByTestId("tag");
      const classes = color[key].split(" ");
      classes.forEach((className) => {
        expect(tag).toHaveClass(className);
      });
    });
  });

  it("Renders inactive tag component", () => {
    render(<Tag state="inactive">Inactive</Tag>);
    const tag = screen.getByTestId("tag");
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveClass("cursor-not-allowed");
    expect(tag).toHaveTextContent("Inactive");
  });
});
