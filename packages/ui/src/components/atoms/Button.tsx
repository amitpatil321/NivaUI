import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonClasses = cva(
  "flex flex-row justify-center items-center self-center gap-8 rounded-lg focus:outline-none font-sans",
  {
    variants: {
      variant: {
        primary:
          "bg-bg-brand border border-border-brand text-text-brand-on-brand hover:bg-bg-brand-hover",
        neutral:
          "bg-bg-neutral-tertiary border border-border-neutral-secondary text-text-default hover:bg-bg-neutral-tertiary-hover",
        subtle: "text-bg-neutral hover:border hover:border-border-default",
      },
      size: {
        sm: "px-2 py-2 text-sm",
        md: "px-3 py-3 text-base",
      },
      disabled: {
        true: "border-bg-disabled border text-text-disabled-on-disabled bg-bg-disabled hover:bg-bg-disabled",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
  }
);

type ButtonVariants = VariantProps<typeof buttonClasses>;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants["variant"];
  size?: "sm" | "md";
  disabled?: boolean;
};

const Button = ({
  variant,
  size,
  disabled = false,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={twMerge(buttonClasses({ variant, size, disabled }))}
      type="button"
      {...props}
      disabled={disabled}
    >
      {children && children}
    </button>
  );
};

export default Button;
