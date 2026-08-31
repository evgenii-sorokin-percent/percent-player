import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ru } from "./locales/ru";
import { en } from "./locales/en";

export const defaultNS = "translation" as const;

export const resources = {
  ru: { translation: ru },
  en: { translation: en },
} as const;

const userLanguage = localStorage.getItem("language") || navigator.language.split("-")[0];

i18n.use(initReactI18next).init({
  resources,
  defaultNS,
  lng: userLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
