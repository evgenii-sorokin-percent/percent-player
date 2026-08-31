import type { AnchorHTMLAttributes, ReactNode } from "react";
import type { View } from "../../types";
import { Link, NavLink } from "react-router";

interface BaseAppLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  children: ReactNode;
  view?: View;
}

type AppLinkProps =
  | (BaseAppLinkProps & { to: string; isNav?: boolean; href?: never })
  | (BaseAppLinkProps & { href: string; isNav?: never; to?: never });

const AppLink = ({ children, view, isNav = false, to, href, ...props }: AppLinkProps) => {
  const className = `${view ? view : ""} ${props.className || ""}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>
        {children}
      </a>
    );
  }

  if (to && isNav) {
    return (
      <NavLink className={className} to={to} {...props}>
        {children}
      </NavLink>
    );
  }

  if (to) {
    return (
      <Link className={className} to={to} {...props}>
        {children}
      </Link>
    );
  }
};

export default AppLink;
