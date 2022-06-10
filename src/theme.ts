import { createTheme, Theme, ThemeOptions } from "@mui/material";

export type MsfpTheme = Theme & {
  appBar: {
    main: string;
  };
};

export type MsfpThemeOptions = ThemeOptions & {
  appBar?: {
    main?: string;
  };
};

export const customOverridesLight: MsfpThemeOptions = {
  appBar: {
    main: "#272727",
  },
  palette: {
    mode: "light",
    primary: {
      main: "#FF4D00",
    },
    secondary: {
      main: "#2D2D2D",
      contrastText: "#fff",
    },
    background: {
      default: "#F5F5F5",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#757575",
      secondary: '#9D9D9D',
    },
    action: {
      selected: "#FF4D00",
    },
  },
  typography: {
    fontFamily: ["Roboto","Helvetica","Arial",'sans-serif'].join(',')
  },
  components: { MuiListItemButton: 
    { styleOverrides:  
      { root: 
        { "&.Mui-selected": { backgroundColor: "rgba(255, 77, 0, 0.1)" ,
          "& .MuiListItemIcon-root": { color: "#FF4D00" } ,
          "& .MuiListItemText-root": { color: "#2D2D2D" } ,
          },
        },
      },
    } 
  }
};

export const customOverridesDark: MsfpThemeOptions = {
  appBar: {
    main: "#272727",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#FF4D00",
    },
    secondary: {
      main: "#757575",
    },
    text: {
      primary: "#F5F5F5",
    },
    background: {
      default: "#202020",
      paper: "#303030",
    },
  },
  typography: {
    fontFamily: ["Roboto","Helvetica","Arial",'sans-serif'].join(',')
  }
};

export const lightTheme = createTheme(customOverridesLight) as MsfpTheme;
export const darkTheme = createTheme(customOverridesDark) as MsfpTheme;
