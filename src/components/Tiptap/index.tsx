import React from "react";
import styled from "styled-components";
import { Editor } from "./Editor";

export const Tiptap = () => {
  return (
    <EditorContainer>
      <Editor />
    </EditorContainer>
  );
};

const EditorContainer = styled.div`
  max-width: 500px;
  min-width: 300px;
`;
