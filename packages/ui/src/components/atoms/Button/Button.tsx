import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonClasses = cva(
  "flex flex-row justify-center items-center self-center gap-8 rounded-lg focus:outline-none font-sans text-base select-none",
  {
    variants: {
      kind: {
        default: "",
        danger: "",
        icon: "rounded-full leading-none",
      },
      variant: {
        primary:
          "bg-bg-brand border border-border-brand !text-text-brand-on-brand hover:bg-bg-brand-hover",
        neutral:
          "bg-bg-neutral-tertiary border border-border-neutral-secondary !text-text-default hover:bg-bg-neutral-tertiary-hover",
        subtle:
          "!text-bg-neutral border border-[#fff] hover:border hover:border-border-default",
      },
      size: {
        sm: "px-2 py-2 text-body-small leading-none",
        md: "px-3 py-3 text-body-base leading-4",
      },
      disabled: {
        true: "border-bg-disabled border cursor-not-allowed text-text-disabled-on-disabled bg-bg-disabled hover:bg-bg-disabled",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
    compoundVariants: [
      {
        kind: "danger",
        variant: "primary",
        class:
          "border-border-danger-secondary bg-bg-danger  text-text-danger-on-danger hover:border-border-danger hover:bg-bg-danger-hover",
      },
      {
        kind: "danger",
        variant: "subtle",
        class:
          "text-text-danger hover:border-border-danger hover:bg-bg-danger-tertiary-hover",
      },
      {
        kind: "icon",
        variant: "primary",
        class:
          "border-border-brand bg-bg-brand text-icon-brand-on-brand hover:bg-bg-brand-hover hover:border-border-brand",
      },
      {
        kind: "icon",
        variant: "neutral",
        class: "text-icon-default border-border-default bg-transparent",
      },
      {
        kind: "icon",
        variant: "subtle",
        class: "text-icon-default",
      },
      {
        kind: "icon",
        disabled: true,
        class:
          "text-border-disabled border-border-disabled bg-bg-disabled hover:bg-bg-disabled hover:border-border-disabled",
      },
    ],
  }
);

type ButtonVariants = VariantProps<typeof buttonClasses>;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  kind?: ButtonVariants["kind"];
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  disabled?: boolean;
};

const Button = ({
  kind,
  variant,
  size,
  disabled = false,
  children,
  ...props
}: ButtonProps) => {
  if (!children) {
    console.warn("Button rendered without children!");
    return null;
  }

  const isIconOnly = kind === "icon" && children;
  return (
    <button
      {...props}
      className={twMerge(
        buttonClasses({ kind, variant, size, disabled }),
        props.className
      )}
      type="button"
      disabled={disabled}
      aria-label="button"
    >
      {isIconOnly ? <span className="inline-flex">{children}</span> : children}
    </button>
  );
};

export default Button;
