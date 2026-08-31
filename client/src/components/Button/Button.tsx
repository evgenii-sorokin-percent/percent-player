import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  view?: "secondary" | "contrast";
  outline?: boolean;
}

const Button = ({ children, view, outline, ...props }: ButtonProps) => {
  return (
    <button className={`${outline ? "outline" : ""} ${view ? view : ""}`} {...props}>
      {" "}
      {children}{" "}
    </button>
  );
};

export default Button;
