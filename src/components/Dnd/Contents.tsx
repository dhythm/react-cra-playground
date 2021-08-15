import { Typography } from "@material-ui/core";
import { DndProvider } from "./DndProvider";
import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";

export const Contents = () => {
  return (
    <DndProvider>
      <Draggable id="id">
        <Typography>Click Me!</Typography>
      </Draggable>
      <Droppable id="id">
        <Typography>Drop here!</Typography>
      </Droppable>
    </DndProvider>
  );
};
