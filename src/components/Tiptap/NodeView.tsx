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
  const [isResizing, setIsResizing] = useState(false);
  const imgRef = useRef<any>(null);
  //   const increase = () => {
  //     props.updateAttributes({
  //       count: props.node.attrs.count + 1,
  //     });
  //   };

  //   return (
  //     <NodeViewWrapper className="react-component">
  //       <span className="label">React Component</span>

  //       <div className="content">
  //         <button onClick={increase}>
  //           This button has been clicked {props.node.attrs.count} times.
  //         </button>
  //       </div>
  //     </NodeViewWrapper>
  //   );
  //   useEffect(() => {
  //     console.log({ ref });
  //     if (ref?.current) {
  //       setSize({
  //         height: ref.current?.height,
  //         width: ref.current?.width,
  //       });
  //     }
  //   }, [ref]);

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
        onResizeStart={() => setIsResizing(true)}
        onResizeStop={() => setIsResizing(false)}
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
          //   src="https://source.unsplash.com/8xznAGy4HcY/800x400"
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg"
          alt="sample1"
        />
      </Resizable>
    </NodeViewWrapper>
  );
  return (
    <NodeViewWrapper
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: size.height,
        width: "100%",
        border: "1px solid #ff0000",
      }}
    >
      <StyledRnd
        size={size}
        enableResizing={{ left: true, right: true }}
        onResizeStart={() => setIsResizing(true)}
        onResizeEnd={() => setIsResizing(false)}
        onResize={(e, direction, ref, delta, position) => {
          console.log({ ref });
          setSize({
            width: parseInt(ref.style.width, 10),
            height:
              (parseInt(ref.style.width, 10) * imgRef.current.naturalHeight) /
              imgRef.current.naturalWidth,
          });
        }}
        disableDragging
      >
        <img
          ref={imgRef}
          //   src="https://source.unsplash.com/8xznAGy4HcY/800x400"
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg"
          alt="sample1"
        />
      </StyledRnd>
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
