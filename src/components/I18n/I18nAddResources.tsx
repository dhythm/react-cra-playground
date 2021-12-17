import i18next from "i18next";
import { FC } from "react";
import {
  I18nextProvider,
  initReactI18next,
  useTranslation,
} from "react-i18next";
import en1 from "./en1.json";
import en2 from "./en2.json";
import en3 from "./en3.json";

i18next.use(initReactI18next).init({
  resources: { en: { translation: { foo: "bar" } } },
  lng: "en",
  ns: ["common"],
  fallbackLng: false,
  keySeparator: false,
  returnEmptyString: false,
  interpolation: {
    escapeValue: false,
  },
});

// i18next.addResources("en", "common", { baz: "qux", quux: "corge" });
//   i18next.addResources("en", "common", {
//     foo: "hoge",
//     baz: "qux",
//     quux: "corge",
//   });
//   i18next.addResources("en", "common", en1);
i18next.addResources("en", "common", en2); // "baz": "qux"
i18next.addResources("en", "common", en3); // "foo": "bar", "quux": "corge"
i18next.addResources("en", "common", en1); // "foo": "hoge"

const Wrapper: FC = ({ children }) => {
  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
};

const Inner: FC = ({ children }) => {
  const { t, i18n } = useTranslation();
  //   i18n.addResources("en", "", { baz: "qux", quux: "corge" });
  return (
    <>
      <div>{t("foo")}</div>
      <div>{t("baz")}</div>
      <div>{t("quux")}</div>
    </>
  );
};

export const I18nAddResources = () => {
  return (
    <Wrapper>
      <Inner />
    </Wrapper>
  );
};
