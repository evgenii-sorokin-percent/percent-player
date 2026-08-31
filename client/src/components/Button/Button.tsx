import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { View } from "../../types";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  view?: View;
  outline?: boolean;
}

const Button = ({ children, view, outline, ...props }: ButtonProps) => {
  return (
    <button
      className={`${outline ? "outline" : ""} ${view ? view : ""} ${props.className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
