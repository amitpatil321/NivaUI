interface AvatarBlockProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const AvatarBlock = ({ title, description, children }: AvatarBlockProps) => {
  return (
    <div
      data-testid="avatar-block"
      className="flex gap-3 font-sans text-body-base"
    >
      <div>{children}</div>
      <div>
        <div className="font-bold text-text-default-secondary">{title}</div>
        <div className="text-text-default-tertiary">{description}</div>
      </div>
    </div>
  );
};

export default AvatarBlock;
