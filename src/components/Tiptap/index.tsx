import React from "react";
import styled from "styled-components";
import { TextEditor } from "./TextEditor";

export const Tiptap = () => {
  // return <ImageView />
  // return <NodeView />;
  return (
    <EditorContainer>
      <TextEditor />
    </EditorContainer>
  );
};

const EditorContainer = styled.div`
  max-width: 500px;
  min-width: 300px;
`;
