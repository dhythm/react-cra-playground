import { Typography } from "@material-ui/core";
import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";

export const Contents = () => {
  return (
    <>
      <Draggable id="id">
        <Typography>Drag me!</Typography>
      </Draggable>
      <Droppable id="id">
        <Typography>Drop here!</Typography>
      </Droppable>
    </>
  );
};
