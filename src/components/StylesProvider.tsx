import { createGenerateClassName } from "@material-ui/core";
import { StylesProvider as MuiStylesProvider } from "@material-ui/styles";

export const StylesProvider = ({ children }) => {
  return (
    <MuiStylesProvider
      generateClassName={createGenerateClassName({ seed: "my" })}
      injectFirst
    >
      {children}
    </MuiStylesProvider>
  );
};
