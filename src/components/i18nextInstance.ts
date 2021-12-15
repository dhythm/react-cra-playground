import i18next from "i18next";
import { initReactI18next } from "react-i18next";

export const setI18next = () =>
  i18next.use(initReactI18next).init({
    resources: { en: { translation: { foo: "outer_declaration" } } },
    lng: "en",
    fallbackLng: false,
    keySeparator: false,
    returnEmptyString: false,
    interpolation: {
      escapeValue: false,
    },
  });
