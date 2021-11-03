import { Editor, EditorContent } from "@tiptap/react";
import React, { VFC } from "react";

export const ImageView: VFC<{ editor: Editor }> = ({ editor }) => {
  // const editor = useEditor({
  //   extensions: [Document, Paragraph, Text, Image, Dropcursor],
  //   content: `
  //     <p>This is a basic example of implementing images. Drag to re-order.</p>
  //     <img src="https://source.unsplash.com/8xznAGy4HcY/800x400" />
  //     <img src="https://source.unsplash.com/K9QHL52rE2k/800x400" />
  //   `,
  // });

  const addImage = () => {
    const url = window.prompt("URL");

    if (url) {
      editor!.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <div>
      <button onClick={addImage}>add image from URL</button>
      <EditorContent editor={editor} />
    </div>
  );
};
