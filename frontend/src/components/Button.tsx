type ButtonProps = {
  label: string;
  width?: number
  onClick: () => void;
  bgColor?: string;
};

const Button: React.FC<ButtonProps> = ({ label, width=28, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={
          `text-white text-lg w-${width} h-10 mt-3 mb-3 mr-3 rounded-md hover:bg-[#027f74] transition duration-200 bg-teal-600 cursor-pointer`
        }
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
