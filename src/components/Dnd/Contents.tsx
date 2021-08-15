import { Typography } from "@material-ui/core";
import { DndProvider } from "./DndProvider";
import { Draggable } from "./Draggable";
import { DroppableContent } from "./DroppableContent";

export const Contents = () => {
  return (
    <DndProvider>
      <Draggable id="draggable-id">
        <Typography>Click Me!</Typography>
      </Draggable>
      <DroppableContent />
    </DndProvider>
  );
};
