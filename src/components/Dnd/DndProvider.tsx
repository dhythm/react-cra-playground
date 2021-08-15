import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { FC, ReactNode } from "react";

const activationConstraint = {
  distance: 3,
};
export const DndProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint,
  });
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint,
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint,
  });
  const keyboardSensor = useSensor(KeyboardSensor, {});

  const sensors = useSensors(
    pointerSensor,
    mouseSensor,
    touchSensor,
    keyboardSensor
  );

  return <DndContext sensors={sensors}>{children}</DndContext>;
};
