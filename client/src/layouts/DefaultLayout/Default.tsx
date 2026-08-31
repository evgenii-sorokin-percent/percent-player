import Navbar from "../../components/Navbar.tsx/Navbar";
import { Outlet } from "react-router";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";

const DefaultLayout = () => {
  return (
    <>
      <Navbar className="container">
        <ul></ul>
        <ul>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </Navbar>
      <Outlet />
    </>
  );
};

export default DefaultLayout;
