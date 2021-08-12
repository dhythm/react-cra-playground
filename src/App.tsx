import { DndContext } from "@dnd-kit/core";
import React from "react";
import { Contents } from "./components/Dnd/Contents";

const App: React.FC = () => {
  return (
    <DndContext>
      <Contents />
    </DndContext>
  );
};

export default App;
