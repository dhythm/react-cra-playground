import React from "react";
import { useTheme } from "styled-components";
import { RichTextEditor } from "./components/RichTextEditor";

const App: React.FC = () => {
  const theme = useTheme();
  console.log({ theme });
  return <RichTextEditor />;
};

export default App;
