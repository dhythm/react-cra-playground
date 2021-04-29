import { Grid, Box, Typography } from "@material-ui/core";
import React from "react";
import { TextField } from "./TextField";

export const GridLayout = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          style={{
            backgroundColor: "grey",
            maxWidth: 800,
            textAlign: "center",
          }}
        >
          <TextField title="title" />
        </Box>
      </Grid>
      <Grid item container xs={12} style={{ textAlign: "center" }}>
        <Box
          style={{
            backgroundColor: "grey",
            maxWidth: 800,
            textAlign: "center",
          }}
        >
          <TextField title="title" />
        </Box>
      </Grid>
      <Grid item container xs={12} justify="center">
        <Box
          style={{
            backgroundColor: "grey",
            maxWidth: 800,
            textAlign: "center",
          }}
        >
          <TextField title="title" />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box style={{ backgroundColor: "grey", width: 800 }}>
          <TextField title="title" />
        </Box>
      </Grid>
    </Grid>
  );
};
