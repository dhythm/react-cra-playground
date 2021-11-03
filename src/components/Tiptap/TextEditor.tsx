import Document from "@tiptap/extension-document";
import { Editor, EditorContent } from "@tiptap/react";
import { VFC } from "react";

export const CustomDocument = Document.extend({
  content: "heading block*",
});

export const TextEditor: VFC<{ editor: Editor }> = ({ editor }) => {
  return <EditorContent editor={editor} />;
};
