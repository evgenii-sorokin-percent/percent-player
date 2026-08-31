import type { HTMLAttributes, ReactNode } from "react";

interface NavProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const Nav = ({ children, ...props }: NavProps) => {
  return <nav {...props}>{children}</nav>;
};

export default Nav;
