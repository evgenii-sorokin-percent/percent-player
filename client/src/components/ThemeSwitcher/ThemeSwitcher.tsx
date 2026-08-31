import style from "./ThemeSwitcher.module.scss";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Classic } from "@theme-toggles/react";

type Theme = "dark" | "light";

const getTheme = (): Theme => {
  const savedTheme = localStorage.getItem("theme") as Theme;
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<Theme>(getTheme);
  const { t } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((previous) => (previous === "light" ? "dark" : "light"));

  return (
    <Classic
      aria-label={t("translation:theme.toggle")}
      data-tooltip={t("translation:theme.toggle")}
      data-placement="bottom"
      className={`contrast outline ${theme} ${style["theme-switcher"]}`}
      onClick={toggleTheme}
    />
  );
};

export default ThemeSwitcher;
