export const tokens = {
  grey: {
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#4d4d4d",
    700: "#333333",
    800: "#1a1a1a",
    900: "#0d0d0d",
  },
  primary: {
    // dark pink shades
    100: "#f5d5df",
    200: "#ebabc0",
    300: "#e281a0",
    400: "#d85781",
    500: "#ce2d61", // Main dark pink
    600: "#b82458",
    700: "#a21b4e",
    800: "#8b1344",
    900: "#750a3b",
  },
  secondary: {
    // dark purple
    100: "#e4d0e7",
    200: "#caa1cf",
    300: "#b172b7",
    400: "#97439f",
    500: "#7e1487", // Main dark purple
    600: "#701277",
    700: "#620f67",
    800: "#530d57",
    900: "#450a47",
  },
  tertiary: {
    // deep magenta
    500: "#ab003c", // Dark magenta
  },
  background: {
    light: "#2c1b2d",
    main: "#1b0d1c",
  },
};

// MUI theme settings
export const themeSettings = {
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.primary[500],
      light: tokens.primary[400],
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[500],
    },
    tertiary: {
      ...tokens.tertiary,
      main: tokens.tertiary[500],
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[500],
    },
    background: {
      default: tokens.background.main,
      light: tokens.background.light,
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 32,
    },
    h2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 24,
    },
    h3: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 20,
      fontWeight: 800,
      color: tokens.grey[200],
    },
    h4: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 600,
      color: tokens.grey[300],
    },
    h5: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      fontWeight: 400,
      color: tokens.grey[500],
    },
    h6: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 10,
      color: tokens.grey[700],
    },
  },
};
