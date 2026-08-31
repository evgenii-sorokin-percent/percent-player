import type { HTMLAttributes, ReactNode } from "react";

interface NavbarProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const Navbar = ({ children, ...props }: NavbarProps) => {
  return <nav {...props}>{children}</nav>;
};

export default Navbar;
