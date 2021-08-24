import { UniqueIdentifier, useDndMonitor } from "@dnd-kit/core";
import { useState } from "react";
import styled from "styled-components";
import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";

const id = "draggable-in-droppable";
export const DroppableContent = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [parent, setParent] = useState<UniqueIdentifier | null>(null);

  useDndMonitor({
    onDragStart: ({ active }) => {
      if (active.id !== id) return;
      setIsDragging(true);
    },
    onDragEnd: ({ active, over }) => {
      if (active.id !== id) return;
      setParent(over ? over.id : null);
      setIsDragging(false);
    },
    onDragCancel: ({ active }) => {
      if (active.id !== id) return;
      setIsDragging(false);
    },
  });
  const item = <DraggableItem />;

  return (
    <>
      <Wrapper>
        <Wrapper style={{ width: 350, flexShrink: 0 }}>
          {parent === null ? item : null}
        </Wrapper>
        <Droppable id="droppable-id" dragging={isDragging}>
          {parent === "droppable-id" ? item : null}
        </Droppable>
      </Wrapper>
      {/* <DragOverlay>
        {isDragging ? <Draggable id={id}>Hello, World</Draggable> : null}
      </DragOverlay> */}
    </>
  );
};

const Wrapper = styled.div<{ center?: boolean }>`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  justify-content: flex-start;

  ${({ center }) => center && `justify-content: center;`}
`;
const DraggableItem = () => {
  return <Draggable id={id}>Droppable</Draggable>;
};
