import { cva, type VariantProps } from "class-variance-authority";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import AvatarBlock from "./AvatarBlock";
import AvatarGroup from "./AvatarGroup";

const avatarClasses = cva(
  "flex justify-center items-center bg-bg-brand shadow-lg overflow-hidden !text-text-brand-on-brand",
  {
    variants: {
      shape: {
        circle: "rounded-full",
        square: "rounded-lg",
      },
      size: {
        sm: "w-6 h-6 text-body-small",
        md: "w-8 h-8 text-body-base",
        lg: "w-10 h-10 text-lg",
      },
    },
    defaultVariants: {
      shape: "circle",
      size: "md",
    },
    compoundVariants: [],
  }
);

type ButtonVariants = VariantProps<typeof avatarClasses>;

type AvatarProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  shape?: ButtonVariants["shape"];
  size?: ButtonVariants["size"];
  icon?: React.ReactNode;
  src?: string;
  children?: React.ReactNode;
};

const Avatar = ({ shape, size, icon, src, children }: AvatarProps) => {
  const [hasError, setError] = useState(false);
  let content;

  if (src && !hasError) {
    content = (
      <img
        src={src}
        alt="avatar"
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
        onError={() => setError(true)}
      />
    );
  } else if (icon) {
    content = icon;
  } else if (children) {
    content = children;
  } else content = <span>NA</span>;

  return (
    <div
      data-testid="avatar"
      className={twMerge(avatarClasses({ shape, size }))}
    >
      {content}
    </div>
  );
};

Avatar.displayName = "Avatar";
Avatar.Group = AvatarGroup;
Avatar.Block = AvatarBlock;

export default Avatar;
