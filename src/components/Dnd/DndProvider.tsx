import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { FC, ReactNode } from "react";

export const DndProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    })
  );
  return <DndContext sensors={sensors}>{children}</DndContext>;
};
