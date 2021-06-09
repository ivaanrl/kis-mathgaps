import { createBreakpoints } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const FontImport = () => (
  <Global
    styles={`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Libre+Franklin:wght@400;500;600;700;900&family=Poppins:wght@400;500&display=swap');
        `}
  />
);

const colors = {
  blue: {
    light: "#203C66",
    main: "#3780EF",
    dark: "#100887",
  },
  yellow: {
    main: "#FFBF00",
  },
  orange: {
    main: "#F29508",
  },
  black: {
    main: "#323232",
  },
  red: {
    main: "#F35761",
  },
  green: {
    main: "#30C18B",
  },
  white: {
    main: "#FFFFFF",
    snow: "#F8F8F8",
  },
  purple: {
    main: "#885FFC",
  },
};

const fonts = {
  body: "Libre Franklin, Inter",
};

const Button = {
  baseStyle: {
    borderRadius: "120px",
    fontFamily: "Libre Franklin, Inter",
  },
  sizes: {
    sm: {
      fontWeight: 400,
      fontSize: "16px",
      height: "40px",
      paddingLeft: "24px",
      paddingRight: "24px",
    },
    md: {
      fontWeight: 400,
      fontSize: "18px",
      height: "50px",
      paddingLeft: "24px",
      paddingRight: "24px",
    },
    lg: {
      fontWeight: 700,
      fontFamily: "Inter",
      fontSize: { base: "18px", lg: "21px" },
      height: { base: "50px", lg: "60px" },
      paddingLeft: "24px",
      paddingRight: "24px",
    },
  },
  variants: {
    primary: {
      background: "linear-gradient(267.77deg, #FC985F 0%, #AE5FFC 100%)",
      color: "white.main",
      _hover: {
        opacity: 0.8,
      },
      _disabled: {
        opacity: 0.5,
        cursor: "not-allowed",
        _hover: {
          opacity: 0.5,
        },
      },
    },
    secondary: {
      backgroundColor: "transparent",
      color: "white.main",
      border: "2px solid",
      borderColor: "white.main",
      _hover: {
        borderColor: "rgba(255, 255, 255, 0.4)",
        color: "rgba(255, 255, 255, 0.4)",
      },
    },
  },
};

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "1000px",
  xl: "80em",
  "2xl": "96em",
  "3xl": "2000px",
});

export const theme = extendTheme({
  colors,
  fonts,
  breakpoints,
  components: {
    Button,
  },
  styles: {
    global: (props) => ({
      "html, body": {
        backgroundColor: "#FFF", //"#F8F8F8",
        overflowX: "hidden",
      },
      "#root": {
        overflow: "hidden",
      },
    }),
  },
});
