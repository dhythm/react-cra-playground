import {
  Divider,
  IconButton,
  Popper,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import {
  ComponentProps,
  ComponentType,
  useCallback,
  useMemo,
  useState,
} from "react";
import styled from "styled-components";

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

  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const openToolbar = useMemo<boolean>(
    () => editorState.getSelection().getHasFocus(),
    [editorState]
  );

  const buttonProps = useMemo(
    () => ({
      getEditorState: () => editorState,
      setEditorState,
    }),
    [editorState]
  );

  const popper = useMemo(() => {
    return (
      ref && (
        <Popper anchorEl={ref} open={openToolbar}>
          <Toolbar
            onMouseDown={(e) => {
              e.preventDefault();
            }}
          >
            <Section>
              <BoldButton {...buttonProps} />
            </Section>
            <Divider orientation="vertical" flexItem />
            <Section>
              <ItalicButton {...buttonProps} />
            </Section>
          </Toolbar>
        </Popper>
      )
    );
  }, [buttonProps, openToolbar, ref]);

  return (
    <>
      <EditorContainer ref={setRef}>
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
        />
      </EditorContainer>
      {popper}
    </>
  );
};

type DraftJsStyleButtonProps = {
  setEditorState(editorState: EditorState): void;
  getEditorState(): EditorState;
};

type DraftJsStyleButtonType = ComponentType<DraftJsStyleButtonProps>;

const BoldButton = (props) => {
  const Component = useMemo(
    () => createInlineStyleButton("BOLD", "B", "⌘+B"),
    []
  );
  return <Component {...props} />;
};

const ItalicButton = (props) => {
  const Component = useMemo(
    () => createInlineStyleButton("ITALIC", "I", "⌘+I"),
    []
  );
  return <Component {...props} />;
};

const createInlineStyleButton = (
  style: string,
  label: string,
  command: string
): DraftJsStyleButtonType => {
  return function createButton(props) {
    return (
      <Tooltip
        title={
          <Typography align="center">
            {label}
            <Typography>{command}</Typography>
          </Typography>
        }
      >
        <IconButton
          size="small"
          onClick={(event) => {
            event.preventDefault();
            props.setEditorState(
              RichUtils.toggleInlineStyle(props.getEditorState(), style)
            );
          }}
        >
          {label}
        </IconButton>
      </Tooltip>
    );
  };
};

const EditorContainer = styled.div`
  margin: 8px;
  padding: 8px;
  border: 1px solid #000;
  border-radius: 4px;
`;

const Toolbar = styled.div`
  border-radius: 3px;
  box-shadow: 4px;
  border: 1px solid gray;
  display: flex;
  background-color: #fff;
`;

const Section = styled.div`
  margin: 4px;
  width: 20px;
  height: 20px;
`;
