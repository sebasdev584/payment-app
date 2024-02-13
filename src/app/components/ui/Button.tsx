import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
};

const Button = ({ children, className, onClick, disabled, type }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
