import i18n from "i18next";
import { FC, useEffect, useState } from "react";
import { initReactI18next, Trans, useTranslation } from "react-i18next";
import enJson from "../locales/en.json";
import jaJson from "../locales/ja.json";

i18n.use(initReactI18next).init({
  //   resources: {
  //     en: { translation: enJson },
  //     ja: { translation: jaJson },
  //   },
  //   lng: "ja",
  //   fallbackLng: "ja",
  //   interpolation: { escapeValue: false },
  debug: true,
  resources: {
    en: { translation: enJson },
    ja: { translation: jaJson },
  },
  lng: "ja",
  fallbackLng: false, // フォールバックしない＝keyをそのまま表示
  returnEmptyString: false, // 空文字での定義を許可
});

export const MultipleLanguage: FC = () => {
  const [t, i18n] = useTranslation();
  const [lang, setLang] = useState("ja");
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <div>
      <header>
        <p>{t("ようこそ React と react-i18next へ。")}</p>
        <small>{t("定義していない文字列")}</small>
        <Trans>
          <h1>Hello, world</h1>
        </Trans>
        <div>
          <button onClick={() => setLang(lang === "en" ? "ja" : "en")}>
            {t("言語を切り替え")}
          </button>
        </div>
      </header>
    </div>
  );
};
