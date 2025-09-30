import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { twMerge } from "tailwind-merge";

const TagClasses = cva(
  "flex justify-center items-center gap-2 p-2 rounded-lg leading-none",
  {
    variants: {
      variant: {
        primary: "",
        secondary: "",
      },
      color: {
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
      },
      state: {
        active: "",
        inactive:
          "!text-text-brand-tertiary !bg-bg-brand-tertiary cursor-not-allowed",
      },
    },
    defaultVariants: {
      variant: "primary",
      color: "brand",
      state: "active",
    },
    compoundVariants: [
      {
        variant: "secondary",
        color: "brand",
        class:
          "text-text-brand-on-brand-tertiary bg-bg-brand-tertiary border-icon-brand-on-brand-tertiary hover:bg-bg-brand-tertiary-hover",
      },
      {
        variant: "secondary",
        color: "danger",
        class:
          "border-icon-danger-on-danger-secondary text-text-danger-on-danger-secondary bg-bg-danger-secondary hover:bg-bg-danger-secondary-hover",
      },
      {
        variant: "secondary",
        color: "positive",
        class:
          "border-icon-positive-on-positive-secondary text-text-positive-on-positive-secondary bg-bg-positive-secondary hover:bg-bg-positive-secondary-hover",
      },
      {
        variant: "secondary",
        color: "warning",
        class:
          "border-icon-warning-on-warning text-text-warning-on-warning bg-bg-warning hover:border-icon-warning-on-warning-secondary hover:text-text-warning-on-warning-secondary hover:bg-bg-warning-secondary-hover",
      },
      {
        variant: "secondary",
        color: "neutral",
        class:
          "border-icon-default text-text-default bg-bg-default-secondary hover:bg-bg-default-secondary-hover",
      },
    ],
  }
);

type TagVariants = VariantProps<typeof TagClasses>;

interface TagProps {
  children: React.ReactNode;
  variant?: TagVariants["variant"];
  color?: TagVariants["color"];
  state?: TagVariants["state"];
}

const Tag = ({ children, variant, color, state }: TagProps) => {
  return (
    <div
      data-testid="tag"
      className={twMerge(TagClasses({ variant, color, state }))}
    >
      <span>{children}</span>
      <span className="cursor-pointer close" data-testid="tag-close">
        <X width={16} height={16} />{" "}
      </span>
    </div>
  );
};

export default Tag;
