import { Grid } from "@material-ui/core";
import React from "react";
import { FlexBoxTextField, TextField } from "./TextField";

export const GridLayout: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {/* Having 800 width but being not centered */}
      <Grid item xs={12}>
        <div
          style={{
            backgroundColor: "grey",
            maxWidth: 800,
            textAlign: "center",
          }}
        >
          <TextField title="title" />
        </div>
      </Grid>

      {/* Not having 800 width and being not centered */}
      <Grid item container xs={12} style={{ textAlign: "center" }}>
        <div
          style={{
            backgroundColor: "grey",
            maxWidth: 800,
          }}
        >
          <TextField title="title" />
        </div>
      </Grid>

      <Grid item container xs={12} justify="center">
        <div
          style={{
            flexGrow: 1,
            backgroundColor: "grey",
            maxWidth: 800,
          }}
        >
          <TextField title="title" />
        </div>
      </Grid>

      <Grid item xs={12}>
        <div
          style={{
            backgroundColor: "grey",
            maxWidth: 800,
            textAlign: "center",
          }}
        >
          <FlexBoxTextField title="title" />
        </div>
      </Grid>
      <Grid item container xs={12} style={{ textAlign: "center" }}>
        <div
          style={{
            backgroundColor: "grey",
            maxWidth: 800,
          }}
        >
          <FlexBoxTextField title="title" />
        </div>
      </Grid>
      <Grid item container xs={12} justify="center">
        <div
          style={{
            flexGrow: 1,
            backgroundColor: "grey",
            maxWidth: 800,
          }}
        >
          <FlexBoxTextField title="title" />
        </div>
      </Grid>
    </Grid>
  );
};
