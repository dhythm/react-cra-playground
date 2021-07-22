import "@material-ui/core/styles/createPalette";

interface Primary {
  "-50": string;
  "-40": string;
  "-30": string;
  "-20": string;
  "-10": string;
  main: string;
  "+10": string;
}

interface Secondary {
  "-30": string;
  "-20": string;
  "-10": string;
  main: string;
}

interface Gray {
  "-40": string;
  "-35": string;
  "-30": string;
  "-25": string;
  "-10": string;
  main: string;
  "+10": string;
  "+25": string;
}

interface Black {
  "-10": string;
  "+10": string;
  main: string;
}

interface White {
  main: string;
}

interface Green {
  "-5": string;
  "-10": string;
  main: string;
  "+10": string;
}

interface Red {
  "-30": string;
  "-10": string;
  "-5": string;
  main: string;
  "+10": string;
}

interface Orange {
  main: string;
  "+10": string;
}

interface CustomPaletteOptions {
  custom?: {
    primary: Primary;
    secondary: Secondary;
    black: Black;
    gray: Gray;
    white: White;
    green: Green;
    red: Red;
    orange: Orange;
  };
}

interface CustomPalette {
  custom: {
    primary: Primary;
    secondary: Secondary;
    black: Black;
    gray: Gray;
    white: White;
    green: Green;
    red: Red;
    orange: Orange;
  };
}

declare module "@material-ui/core/styles/createPalette" {
  interface PaletteOptions extends CustomPaletteOptions {}

  interface Palette extends CustomPalette {}
}
