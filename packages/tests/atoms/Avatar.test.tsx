import { Avatar } from "@niva/ui";
import { render, screen } from "@testing-library/react";
import { Bell, Heart, Mail, Star, User } from "lucide-react";
import { describe } from "vitest";

describe("Avatar component", () => {
  it("Renders avatar component correctly", () => {
    render(<Avatar icon={<User />} />);
    const button = screen.getByTestId("avatar");
    expect(button).toBeInTheDocument();
  });

  it("Renders circular avatar component correctly", () => {
    render(<Avatar shape="circle" icon={<User />} />);
    const button = screen.getByTestId("avatar");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("rounded-full");
  });

  it("Renders square avatar component correctly", () => {
    render(<Avatar shape="square" icon={<User />} />);
    const button = screen.getByTestId("avatar");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("rounded-lg");
  });
  it("Renders small avatar component correctly", () => {
    render(<Avatar size="sm" icon={<User />} />);
    const button = screen.getByTestId("avatar");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("w-6");
    expect(button).toHaveClass("h-6");
    expect(button).toHaveClass("text-body-small");
  });
  it("Renders medium avatar component correctly", () => {
    render(<Avatar size="md" icon={<User />} />);
    const button = screen.getByTestId("avatar");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("w-8");
    expect(button).toHaveClass("h-8");
    expect(button).toHaveClass("text-body-base");
  });
  it("Renders large avatar component correctly", () => {
    render(<Avatar size="lg" icon={<User />} />);
    const button = screen.getByTestId("avatar");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("w-10");
    expect(button).toHaveClass("h-10");
    expect(button).toHaveClass("text-lg");
  });
});

describe("Avatar Group component", () => {
  it("Renders avatar component with spaced layout correctly", () => {
    render(
      <Avatar.Group layout="spaced">
        <Avatar icon={<User data-testid="user-icon" />} />
        <Avatar icon={<Bell data-testid="bell-icon" />} />
        <Avatar icon={<Mail data-testid="mail-icon" />} />
        <Avatar icon={<Heart data-testid="heart-icon" />} />
        <Avatar icon={<Star data-testid="star-icon" />} />
      </Avatar.Group>
    );
    const group = screen.getByTestId("avatar-group");
    const inner = screen.getByTestId("avatar-group-inner");
    expect(group).toBeInTheDocument();
    // check if it has correct classes
    expect(inner).toBeInTheDocument();
    expect(inner).toHaveClass("gap-1");

    // First 3 icons should be visible
    expect(screen.getByTestId("user-icon")).toBeInTheDocument();
    expect(screen.getByTestId("bell-icon")).toBeInTheDocument();
    expect(screen.getByTestId("mail-icon")).toBeInTheDocument();

    // The 4th and 5th should not be rendered directly
    expect(screen.queryByTestId("heart-icon")).not.toBeInTheDocument();
    expect(screen.queryByTestId("star-icon")).not.toBeInTheDocument();
    // Instead, "+2" should be displayed
    expect(screen.getByText("+2")).toBeInTheDocument();
  });
  it("Renders avatar component with overlap layout correctly", () => {
    render(
      <Avatar.Group layout="overlap">
        <Avatar icon={<User data-testid="user-icon" />} />
        <Avatar icon={<Bell data-testid="bell-icon" />} />
        <Avatar icon={<Mail data-testid="mail-icon" />} />
        <Avatar icon={<Heart data-testid="heart-icon" />} />
        <Avatar icon={<Star data-testid="star-icon" />} />
      </Avatar.Group>
    );
    const group = screen.getByTestId("avatar-group");
    const inner = screen.getByTestId("avatar-group-inner");
    expect(group).toBeInTheDocument();
    // check if it has correct classes
    expect(inner).toBeInTheDocument();
    expect(inner).toHaveClass("-space-x-2");

    // First 3 icons should be visible
    expect(screen.getByTestId("user-icon")).toBeInTheDocument();
    expect(screen.getByTestId("bell-icon")).toBeInTheDocument();
    expect(screen.getByTestId("mail-icon")).toBeInTheDocument();

    // The 4th and 5th should not be rendered directly
    expect(screen.queryByTestId("heart-icon")).not.toBeInTheDocument();
    expect(screen.queryByTestId("star-icon")).not.toBeInTheDocument();
    // Instead, "+2" should be displayed
    expect(screen.getByText("+2")).toBeInTheDocument();
  });
});

describe("Avatar Block component", () => {
  it("Renders avatar block component correctly", () => {
    render(
      <Avatar.Block
        title="Prateek Patil"
        description="More people than ever are building component driven UIs"
      >
        <Avatar icon={<User />} />
      </Avatar.Block>
    );
    const block = screen.getByTestId("avatar-block");
    expect(block).toBeInTheDocument();
    expect(block).toHaveClass("flex gap-3 font-sans text-body-base");
    expect(block).toHaveTextContent("Prateek Patil");
    expect(block).toHaveTextContent(
      "More people than ever are building component driven UIs"
    );
  });
});
