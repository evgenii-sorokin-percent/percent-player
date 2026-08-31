import Navbar from "../../components/Navbar.tsx/Navbar";
import { Outlet } from "react-router";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";

const DefaultLayout = () => {
  return (
    <div className="layout-wrapper">
      <Navbar className="container">
        <ul></ul>
        <ul>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </Navbar>
      <main className="layout-main">
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;
