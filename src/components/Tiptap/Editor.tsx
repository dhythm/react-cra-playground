import Placeholder from "@tiptap/extension-placeholder";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "./styles.scss";
import { TextEditor } from "./TextEditor";

export const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: ({ node }) => {
          console.log({ node });
          if (node.type.name === "heading") {
            return "What’s the title?";
          }

          return "Can you add some further context?";
        },
        emptyEditorClass: "is-editor-empty",
        emptyNodeClass: "is-empty",
      }),
      //   ReactComponent,
      //   Document,
      //   Paragraph,
      //   Text,
      //   Image,
      //   Dropcursor,
      //   Placeholder.configure({
      //     placeholder: "Write something...",
      //     showOnlyWhenEditable: false,
      //     showOnlyCurrent: false,
      //   }),
    ],
    content: `
      <h1>
        It’ll always have a heading …
      </h1>
      <p>
        … if you pass a custom document. That’s the beauty of having full control over the schema.
      </p>
    `,
  });
  if (!editor) return <></>;

  console.log(editor.getHTML());

  return (
    <div>
      <TextEditor editor={editor} />
      {/* <NodeView editor={editor} /> */}
      {/* <ImageView editor={editor} /> */}
    </div>
  );
};
