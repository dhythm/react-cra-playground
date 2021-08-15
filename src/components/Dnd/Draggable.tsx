import { useDndMonitor, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useEffect, useState } from "react";
import styled from "styled-components";

export const Draggable = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, isDragging, transform } =
    useDraggable({
      id,
    });
  const [scale, setScale] = useState({ scaleX: 1, scaleY: 1 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [positionFixed, setPositionFixed] = useState(position);

  const style = {
    transform: CSS.Translate.toString({
      ...(isDragging ? position : positionFixed),
      ...scale,
    }),
  };

  useEffect(() => {
    if (transform) {
      const { scaleX, scaleY } = transform;
      setScale({ scaleX, scaleY });
    }
  }, [transform]);

  useDndMonitor({
    onDragStart: ({ active }) => {
      if (active.id !== id) return;
      // console.log({ debug: "onDragStart", active });
    },
    onDragMove: ({ active, delta }) => {
      if (active.id !== id) return;
      // console.log({ debug: "onDragMove", active, delta });
      setPosition({
        x: positionFixed.x + delta.x,
        y: positionFixed.y + delta.y,
      });
    },
    onDragEnd: ({ active, delta }) => {
      if (active.id !== id) return;
      if (delta.x === 0 && delta.y === 0) return;
      // console.log({ debug: "onDragEnd", active, delta });
      setPositionFixed((prev) => ({
        x: prev.x + delta.x,
        y: prev.y + delta.y,
      }));
    },
  });

  console.log({ ...style, position, positionFixed });

  return (
    <div ref={setNodeRef} style={style}>
      <Header {...listeners} {...attributes}>
        Header
      </Header>
      <Body>
        <button>{children}</button>
      </Body>
    </div>
  );
};

const Header = styled.div`
  height: 30px;
  width: 200px;
  background-color: #0000ff32;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`;

const Body = styled.div`
  height: 100px;
  width: 200px;
  background-color: #ff000032;
`;
