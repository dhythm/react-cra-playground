import { TextField as MuiTextField, Typography } from "@material-ui/core";
import React, { ComponentProps } from "react";

// interface Props {
//   title: string;
// }
type Props = {
  title: string;
} & ComponentProps<typeof MuiTextField>;

export const TextField: React.FC<Props> = ({ title, ...props }) => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Typography>{title}</Typography>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <MuiTextField placeholder="placeholder" {...props} />
      </div>
    </div>
  );
};

export const FlexBoxTextField: React.FC<Props> = ({ title }) => {
  return (
    <div style={{ display: "flex", flexGrow: 1, flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Typography>{title}</Typography>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <MuiTextField placeholder="placeholder" />
      </div>
    </div>
  );
};
