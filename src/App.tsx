import React from "react";
import { I18nImported } from "./components/I18nImported";
import { I18nNested } from "./components/I18nNested";

const App: React.FC = () => {
  return (
    <>
      <I18nNested />
      <hr />
      <I18nImported />
    </>
  );
};

export default App;
