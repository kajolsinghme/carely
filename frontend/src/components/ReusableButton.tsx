type ReusableButtonProps = {
  label: string;
  onClick: () => void;
  bgColor?: string;
};

const ReusableButton: React.FC<ReusableButtonProps> = ({ label, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={
          "text-white text-lg w-24 h-10 m-3 rounded-md hover:bg-[#027f74] transition duration-200 bg-teal-600 cursor-pointer"
        }
      >
        {label}
      </button>
    </div>
  );
};

export default ReusableButton;
