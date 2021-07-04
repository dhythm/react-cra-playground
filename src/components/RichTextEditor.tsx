import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import { ComponentProps, useCallback, useState } from "react";

export const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleKeyCommand = useCallback<
    NonNullable<ComponentProps<typeof Editor>["handleKeyCommand"]>
  >((command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }

    return "not-handled";
  }, []);

  return (
    <Editor
      editorState={editorState}
      onChange={setEditorState}
      handleKeyCommand={handleKeyCommand}
    />
  );
};
