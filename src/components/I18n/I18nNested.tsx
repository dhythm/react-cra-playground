import i18next from "i18next";
import { FC, useMemo, VFC } from "react";
import {
  I18nextProvider,
  initReactI18next,
  useTranslation,
} from "react-i18next";
import "./i18nextInstance";

export const I18nNested: VFC = () => {
  return (
    <>
      {/* bar */}
      <Wrapper1>
        <Content />
      </Wrapper1>

      {/* baz */}
      <Wrapper2>
        <Content />
      </Wrapper2>

      {/* hoge */}
      <Wrapper3>
        <Content />
      </Wrapper3>

      {/* baz */}
      <Wrapper1>
        <Wrapper2>
          <Content />
        </Wrapper2>
      </Wrapper1>

      {/* foo */}
      <Wrapper1>
        <Wrapper4>
          <Content />
        </Wrapper4>
      </Wrapper1>

      {/* raw */}
      <RawContent />

      {/* raw */}
      <Wrapper1>
        <RawContent />
      </Wrapper1>

      {/* raw */}
      <PureContent />

      {/* bar */}
      <Wrapper1>
        <PureContent />
      </Wrapper1>
    </>
  );
};

const Content: VFC = () => {
  const { t } = useTranslation();
  return <div>{t("foo")}</div>;
};

const PureContent: VFC = () => {
  const { t } = useTranslation();
  return <div>{t("foo")}</div>;
};

const RawContent: VFC = () => {
  const { t, i18n } = useTranslation();
  i18n.use(initReactI18next).init({
    resources: { en: { translation: { foo: "raw" } } },
    lng: "en",
    fallbackLng: false,
    keySeparator: false,
    returnEmptyString: false,
    interpolation: {
      escapeValue: false,
    },
  });

  return <div>{t("foo")}</div>;
};

const Wrapper1: FC = ({ children }) => {
  const i18nextInstance = useMemo(() => {
    const instance = i18next.createInstance();
    instance.use(initReactI18next).init({
      resources: { en: { translation: { foo: "bar" } } },
      lng: "en",
      fallbackLng: false,
      keySeparator: false,
      returnEmptyString: false,
      interpolation: {
        escapeValue: false,
      },
    });
    return instance;
  }, []);
  return <I18nextProvider i18n={i18nextInstance}>{children}</I18nextProvider>;
};

const Wrapper2: FC = ({ children }) => {
  const i18nextInstance = useMemo(() => {
    const instance = i18next.createInstance();
    instance.use(initReactI18next).init({
      resources: { en: { translation: { foo: "baz" } } },
      lng: "en",
      fallbackLng: false,
      keySeparator: false,
      returnEmptyString: false,
      interpolation: {
        escapeValue: false,
      },
    });
    return instance;
  }, []);
  return <I18nextProvider i18n={i18nextInstance}>{children}</I18nextProvider>;
};

const Wrapper3: FC = ({ children }) => {
  const i18nextInstance = useMemo(() => {
    const instance = i18next.createInstance();
    instance.use(initReactI18next).init({
      resources: { en: { translation: { foo: "hoge" } } },
      lng: "en",
      fallbackLng: false,
      keySeparator: false,
      returnEmptyString: false,
      interpolation: {
        escapeValue: false,
      },
    });
    return instance;
  }, []);
  return <I18nextProvider i18n={i18nextInstance}>{children}</I18nextProvider>;
};

const Wrapper4: FC = ({ children }) => {
  const i18nextInstance = useMemo(() => {
    const instance = i18next.createInstance();
    instance.use(initReactI18next).init({
      resources: { en: { translation: { bar: "bar" } } },
      lng: "en",
      fallbackLng: false,
      keySeparator: false,
      returnEmptyString: false,
      interpolation: {
        escapeValue: false,
      },
    });
    return instance;
  }, []);
  return <I18nextProvider i18n={i18nextInstance}>{children}</I18nextProvider>;
};
