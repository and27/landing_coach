import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-green-500 text-neutral-900 font-semibold py-3 px-8 rounded-md text-xl 
        hover:bg-green-600 transition-transform hover:scale-110 transform duration-300 ease-in-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
