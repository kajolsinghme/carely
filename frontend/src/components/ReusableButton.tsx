
type ReusableButtonProps = {
    label: string;
    onClick: () => void;
    bgColor?: string;
}

const ReusableButton: React.FC<ReusableButtonProps> = ({label, onClick, bgColor="bg-blue-500"}) => {
   
  return (
    <div>
      <button onClick={onClick} className={`text-white text-lg w-28 h-12 m-40 px-4 py-2 rounded-b-md ${bgColor}`}>
        {label}
      </button>
    </div> 
  );
};

export default ReusableButton;
