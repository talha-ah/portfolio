export default function IconButton(theme) {
  return {
    MuiIconButton: {
      defaultProps: {
        size: "small",
        // disableElevation: true,
      },
      styleOverrides: {
        root: {
          // padding: 8, // Adjust padding as needed
          // "& svg": {
          //   fontSize: "small", // set the size for the icon inside the IconButton
          // },
        },
        // sizeLarge: {
        //   width: theme.spacing(5.5),
        //   height: theme.spacing(5.5),
        //   fontSize: "1.25rem",
        // },
        // sizeMedium: {
        //   width: theme.spacing(4.5),
        //   height: theme.spacing(4.5),
        //   fontSize: "1rem",
        // },
        // sizeSmall: {
        //   width: theme.spacing(3.75),
        //   height: theme.spacing(3.75),
        //   fontSize: "0.75rem",
        // },
      },
    },
  }
}
