type ButtonProps = {
  children: React.ReactElement | string;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="flex flex-row justify-center items-center self-center gap-8 bg-orange-500 hover:bg-orange-600 px-3 py-3 rounded-lg focus:outline-none font-sans text-white text-base transition-colors">
      {children}
    </button>
  );
};

export default Button;
