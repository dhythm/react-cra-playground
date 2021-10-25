import { Node } from "@tiptap/core";
import {
  EditorContent,
  mergeAttributes,
  NodeViewWrapper,
  ReactNodeViewRenderer,
  useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useRef, useState } from "react";
import { Rnd } from "react-rnd";
import "./styles.scss";

const Component = (props) => {
  const [size, setSize] = useState({ width: 400, height: 200 });
  const ref = useRef<any>(null);
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
  return (
    <NodeViewWrapper
      className="image-wrapper"
      style={{
        height: ref?.current?.height ?? size.height,
        width: ref?.current?.width ?? size.width,
      }}
    >
      <Rnd
        size={size}
        onResizeStop={(e, direction, ref, delta, position) => {
          setSize({
            width: parseInt(ref.style.width, 10),
            height: parseInt(ref.style.height, 10),
          });
        }}
        disableDragging
      >
        <img
          ref={ref}
          src="https://source.unsplash.com/8xznAGy4HcY/800x400"
          alt="sample1"
        />
      </Rnd>
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
