import { useDroppable } from "@dnd-kit/core";

export const Droppable = ({ id, children }) => {
  const { setNodeRef } = useDroppable({ id });

  return <div ref={setNodeRef}>{children}</div>;
};
