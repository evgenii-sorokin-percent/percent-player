import { useTranslation } from "react-i18next";

const LANGUAGES_FLAGS = {
  ru: "🇷🇺",
  en: "🇺🇸",
} as const;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const currentLanguageFlag: string =
    LANGUAGES_FLAGS[i18n.language as keyof typeof LANGUAGES_FLAGS];

  const changeLanguage = (language: string) => i18n.changeLanguage(language);

  return (
    <details className="dropdown">
      <summary>{currentLanguageFlag}</summary>
      <ul>
        <li>
          <a onClick={() => changeLanguage("ru")} aria-label="Русский" href="#">
            🇷🇺
          </a>
        </li>
        <li>
          <a onClick={() => changeLanguage("en")} aria-label="Английский" href="#">
            🇺🇸
          </a>
        </li>
      </ul>
    </details>
  );
};

export default LanguageSwitcher;
