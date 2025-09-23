type ButtonProps = {
  children: React.ReactElement | string;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <div className="inline-block bg-indigo-700 px-3 py-3 rounded-md min-w-5 text-white">
      {children}
    </div>
  );
};

export default Button;
