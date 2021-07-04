import { makeStyles } from "@material-ui/core";
import { SnackbarProvider as NotiSnackbarProvider } from "notistack";

export const SnackbarProvider = ({ children }) => {
  return (
    <NotiSnackbarProvider
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={3000}
      maxSnack={5}
      classes={useStyles()}
      className={`${useCustomStyles()["my-MuiCollapse-container"]}`}
    >
      {children}
    </NotiSnackbarProvider>
  );
};

const useStyles = makeStyles((theme) => ({
  contentRoot: {
    minWidth: 0,
    height: 33,
    alignContent: "center",
    flexWrap: "nowrap",
  },
  containerAnchorOriginTopCenter: {
    // margin: 12px + 4px = 16px
    top: 12,
  },
  // collapseWrapper: {
  //   marginTop: 4,
  //   marginBottom: 4,
  // },
  lessPadding: {
    paddingLeft: 8 * 2,
  },
}));

const useCustomStyles = makeStyles((theme) => ({
  "my-MuiCollapse-container": {
    pointerEvents: "all",
    marginTop: "6px",
    marginBottom: "6px",
  },
}));
