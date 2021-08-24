import styled from "styled-components";
import { DndProvider } from "./DndProvider";
import { Draggable } from "./Draggable";
import { DroppableContent } from "./DroppableContent";

export const Contents = () => {
  return (
    <DndProvider>
      <Draggable id="draggable-id">Draggable</Draggable>
      <DroppableContent />
    </DndProvider>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  background-color: #30303030;
`;
