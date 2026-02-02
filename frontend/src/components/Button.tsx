type ButtonProps = {
  label: string;
  onClick?: () => void;
  width?: string;
  variant?: "primary" | "danger";
  type?: "button" | "submit";
};

const Button = ({
  label,
  onClick,
  width = "w-28",
  variant = "primary",
  type = "button",
}: ButtonProps) => {
  const baseStyles =
    "rounded-xl py-2 font-medium transition text-white";

  const variants = {
    primary: "bg-teal-600 hover:opacity-90",
    danger: "bg-red-600 hover:bg-red-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${width} ${baseStyles} ${variants[variant]}`}
    >
      {label}
    </button>
  );
};

export default Button;
