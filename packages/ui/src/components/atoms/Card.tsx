import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-bg-neutral shadow-md p-4 rounded-lg">{children}</div>
  );
};

export default Card;
