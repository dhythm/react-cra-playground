import { Button } from "@material-ui/core";
import { useSnackbar } from "notistack";
import React from "react";

const App: React.FC = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  return (
    <div>
      <Button
        onClick={() => {
          enqueueSnackbar("shown!", {
            persist: true,
            action: (key) => (
              <Button onClick={() => closeSnackbar(key)}>close</Button>
            ),
          });
        }}
      >
        click me!
      </Button>
    </div>
  );
};

export default App;
