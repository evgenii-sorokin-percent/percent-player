import Navbar from "../../components/Navbar.tsx/Navbar";
import { Outlet } from "react-router";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher";

const DefaultLayout = () => {
  return (
    <div className="layout-wrapper">
      <Navbar className="container">
        <ul></ul>
        <ul>
          <li>
            <LanguageSwitcher />
          </li>
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
