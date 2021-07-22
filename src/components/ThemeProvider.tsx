import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import React, { useMemo } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
// import "../../@types/createPalette.d";

export const ThemeProvider: React.FC = ({ children }) => {
  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          custom: {
            primary: {
              "-50": "#F1F8FE",
              "-40": "#C0DDFD",
              "-30": "#8FC3FB",
              "-20": "#5EA8F9",
              "-10": "#2D8EF7",
              main: "#0974E8",
              "+10": "#075BB7",
            },
            secondary: {
              "-30": "#FFF3D3",
              "-20": "#FFE5A0",
              "-10": "#FFD86D",
              main: "#FFCA3A",
            },
            black: {
              "-10": "#3D4044",
              "+10": "#72777E",
              main: "#252729",
            },
            gray: {
              "-40": "#F7F7F8",
              "-35": "#EAEBEC",
              "-30": "#DCDEE0",
              "-25": "#CFD1D4",
              "-10": "#A7ABAF",
              main: "#8C9197",
              "+10": "#72777E",
              "+25": "#4E5156",
            },
            white: {
              main: "#FFFFFF",
            },
            green: {
              "-5": "#46C4A2",
              "-10": "#59CBAC",
              main: "#3AB795",
              "+10": "#2E9075",
            },
            red: {
              "-30": "#FFF2F2",
              "-10": "#FF8C8F",
              "-5": "#FF7277",
              main: "#FF595E",
              "+10": "#FF262D",
            },
            orange: {
              main: "#EC4E20",
              "+10": "#C83A11",
            },
          },
        },
      }),
    []
  );

  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </MuiThemeProvider>
  );
};
