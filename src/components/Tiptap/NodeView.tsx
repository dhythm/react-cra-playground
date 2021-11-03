import { Node } from "@tiptap/core";
import {
  Editor,
  EditorContent,
  mergeAttributes,
  NodeViewWrapper,
  ReactNodeViewRenderer,
} from "@tiptap/react";
import { Resizable } from "re-resizable";
import { useRef, useState, VFC } from "react";
import { useHover } from "react-use";
import styled from "styled-components";

const Component = (props) => {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 400,
    height: 200,
  });
  const imgRef = useRef<any>(null);
  const imgUrl = props.node.attrs.imgUrl;

  const [hoverableImage, isHovering] = useHover(() => {
    return (
      <Resizable
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
        minWidth={36}
      >
        <img
          ref={imgRef}
          style={{
            ...size,
          }}
          //   src="https://source.unsplash.com/8xznAGy4HcY/800x400"
          //   src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg"
          src={imgUrl}
          alt="sample1"
          onLoad={() => {
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
    );
  });

  return (
    <NodeViewWrapper
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        height: size.height,
        width: "100%",
        border: "1px solid #ff0000",
      }}
    >
      {hoverableImage}
      {isHovering && (
        <ImageMask
          style={{
            width: size.width,
          }}
        >
          <StyledResizeImageIconLeft />
          <StyledResizeImageIconRight />
        </ImageMask>
      )}
    </NodeViewWrapper>
  );
};

export const ReactComponent = Node.create({
  name: "reactComponent",

  group: "block",

  atom: true,

  addAttributes() {
    return {
      imgUrl: {
        default: "",
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

export const NodeView: VFC<{ editor: Editor }> = ({ editor }) => {
  const [imgUrl, setImgUrl] = useState(
    "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg"
  );

  const addImage = () => {
    const url = window.prompt("URL");

    if (url) {
      //   setImgUrl(url);
      editor!.commands.setContent(
        `
    <react-component imgUrl="${url}"></react-component>
    `
      );
    }
  };

  console.log({ imgUrl });
  // const editor = useEditor({
  //   extensions: [StarterKit, ReactComponent],
  //   content: `
  //   <react-component imgUrl="${imgUrl}"></react-component>
  //   `,
  // });

  return (
    <div>
      <button onClick={addImage}>add image from URL</button>
      <EditorContent editor={editor} />
    </div>
  );
};

const ImageMask = styled.div`
  background-color: #00000066;
  min-width: 36px;
  max-width: 100%;
  position: absolute;
  height: 100%;
  top: 0;
  pointer-events: none;
`;

const ResizeImageIcon = styled.div`
  border-radius: 3px;
  max-height: 20px;
  min-height: 10px;
  width: 5px;
  background-color: #ffffff;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
`;

const StyledResizeImageIconLeft = styled(ResizeImageIcon)`
  left: 4px;
`;

const StyledResizeImageIconRight = styled(ResizeImageIcon)`
  right: 4px;
`;
