import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const AvatarGroupClasses = cva("flex flex-row items-center", {
  variants: {
    layout: {
      spaced: "gap-1",
      overlap: "-space-x-2",
    },
  },
  defaultVariants: {
    layout: "overlap",
  },
});

type AvatarGroupVariants = VariantProps<typeof AvatarGroupClasses>;

type AvatarGroupProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  layout?: AvatarGroupVariants["layout"];
};

const AvatarGroup = ({ layout, children }: AvatarGroupProps) => {
  const childArray = React.Children.toArray(children);
  const firstThree = childArray.slice(0, 3);
  const remaining = childArray.slice(3);

  return (
    <div
      data-testid="avatar-group"
      className="flex justify-center items-center gap-2"
    >
      <div
        data-testid="avatar-group-inner"
        className={twMerge(AvatarGroupClasses({ layout }))}
      >
        {firstThree}
      </div>
      <span className="text-text-default-secondary">+{remaining.length}</span>
    </div>
  );
};

export default AvatarGroup;
