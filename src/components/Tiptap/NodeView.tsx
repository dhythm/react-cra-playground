import { Node } from "@tiptap/core";
import {
  EditorContent,
  mergeAttributes,
  NodeViewWrapper,
  ReactNodeViewRenderer,
  useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Resizable } from "re-resizable";
import { useRef, useState } from "react";
import { Rnd } from "react-rnd";
import styled from "styled-components";
import "./styles.scss";

const Component = (props) => {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 400,
    height: 200,
  });
  const imgRef = useRef<any>(null);

  console.log({ ...size });
  return (
    <NodeViewWrapper
      style={{
        display: "flex",
        justifyContent: "center",
        height: size.height,
        width: "100%",
        border: "1px solid #ff0000",
      }}
    >
      <Resizable
        style={{
          border: "1px solid #0000ff",
        }}
        size={size}
        bounds="parent"
        enable={{ left: true, right: true }}
        onResize={(e, dir, ref) => {
          setSize({
            width: parseInt(ref.style.width, 10),
            height:
              (parseInt(ref.style.width, 10) * imgRef.current.naturalHeight) /
              imgRef.current.naturalWidth,
          });
        }}
      >
        <img
          ref={imgRef}
          style={{
            ...size,
          }}
          //   src="https://source.unsplash.com/8xznAGy4HcY/800x400"
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg"
          alt="sample1"
          onLoad={() => {
            console.log({ img: imgRef.current });
            setSize({
              width: parseInt(imgRef.current.style.width, 10),
              height:
                (parseInt(imgRef.current.style.width, 10) *
                  imgRef.current.naturalHeight) /
                imgRef.current.naturalWidth,
            });
          }}
        />
      </Resizable>
    </NodeViewWrapper>
  );
};

const ReactComponent = Node.create({
  name: "reactComponent",

  group: "block",

  atom: true,

  addAttributes() {
    return {
      count: {
        default: 0,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "react-component",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["react-component", mergeAttributes(HTMLAttributes)];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component);
  },
});

export const NodeView = () => {
  const editor = useEditor({
    extensions: [StarterKit, ReactComponent],
    content: `
    <p>
      This is still the text editor you’re used to, but enriched with node views.
    </p>
    <react-component count="0"></react-component>
    <p>
      Did you see that? That’s a React component. We are really living in the future.
    </p>
    `,
  });

  return <EditorContent editor={editor} />;
};

const StyledRnd = styled(Rnd)`
  &:hover {
    outline: 3px solid #68cef8;
  }
  cursor: ew-resize;
`;
