import { VFC } from "react";
import { useTranslation } from "react-i18next";
import { setI18next } from "./i18nextInstance";

export const I18nImported: VFC = () => {
  setI18next();
  // outer_declaration
  return <Content />;
};

const Content: VFC = () => {
  const { t } = useTranslation();
  return <div>{t("foo")}</div>;
};
