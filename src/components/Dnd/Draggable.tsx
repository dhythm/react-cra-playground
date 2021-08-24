import {
  Translate,
  UniqueIdentifier,
  useDndMonitor,
  useDraggable,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";

const defaultCoordinates = {
  x: 0,
  y: 0,
};

export const Draggable: FC<{
  id: UniqueIdentifier;
  header?: React.ReactNode;
  children?: React.ReactNode;
}> = ({ id, header, children }) => {
  const { attributes, listeners, setNodeRef, isDragging, transform } =
    useDraggable({
      id,
    });

  const [{ translate }, setTranslate] = useState<{
    initialTranslate: Translate;
    translate: Translate;
  }>({ initialTranslate: defaultCoordinates, translate: defaultCoordinates });
  const [initialPosition, setInitialPosition] = useState(defaultCoordinates);

  const [scale, setScale] = useState({ scaleX: 1, scaleY: 1 });

  const style = {
    transform: CSS.Translate.toString({
      ...translate,
      ...scale,
    }),
    width: 200,
  };

  useEffect(() => {
    if (transform) {
      const { scaleX, scaleY } = transform;
      setScale({ scaleX, scaleY });
    }
  }, [transform]);

  // https://github.com/clauderic/dnd-kit/blob/ad4a26f1ba9b01ea8f6050bcfc21c12125063dc3/stories/1%20-%20Core/Draggable/1-Draggable.story.tsx#L81
  useDndMonitor({
    onDragStart: ({ active }) => {
      if (active.id !== id) return;
      setInitialPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    },
    onDragMove: ({ active, delta }) => {
      if (active.id !== id) return;
      setTranslate(({ initialTranslate }) => ({
        initialTranslate,
        translate: {
          x: initialTranslate.x + delta.x - initialPosition.x,
          y: initialTranslate.y + delta.y - initialPosition.y,
        },
      }));
    },
    onDragEnd: ({ active, delta }) => {
      if (active.id !== id) return;
      if (delta.x === 0 && delta.y === 0) return;
      setTranslate(({ translate }) => {
        return {
          translate,
          initialTranslate: translate,
        };
      });
      setInitialPosition(defaultCoordinates);
    },
    onDragCancel: ({ active }) => {
      if (active.id !== id) return;
      setTranslate(({ initialTranslate }) => ({
        translate: initialTranslate,
        initialTranslate,
      }));
      setInitialPosition(defaultCoordinates);
    },
  });

  return (
    <div ref={setNodeRef} style={style}>
      <Header {...listeners} {...attributes}>
        {header}
      </Header>
      <Body>{children}</Body>
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
