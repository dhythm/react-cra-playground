import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SnackbarProvider } from "./components/Snackbar";
import { StylesProvider } from "./components/StylesProvider";
import { ThemeProvider } from "./components/ThemeProvider";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// const theme = createMuiTheme({
//   overrides: {
//     MuiButton: {
//       root: {
//         borderRadius: 0,
//       },
//     },
//   },
// });

ReactDOM.render(
  <React.StrictMode>
    {/* SnackbarProvider only works well in outside of StylesProvider with generateClassName */}
    <SnackbarProvider>
      <StylesProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </StylesProvider>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
