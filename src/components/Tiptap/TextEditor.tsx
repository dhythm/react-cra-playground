import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "./styles.scss";

export const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Write something...",
        showOnlyWhenEditable: false,
        showOnlyCurrent: false,
      }),
    ],
    content: `
    <p>foo bar baz</p>
    `,
  });

  return <EditorContent editor={editor} />;
};
