import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    white: {
      main: string
    };
    blue: {
      light: string,
      main: string,
      dark: string,
    };
    red: {
      light: string,
      main: string,
      dark: string,
    };
  }
  interface PaletteOptions {
    white?: {
      main?: string
    };
    blue?: {
      light?: string,
      main?: string,
      dark?: string,
    };
    red?: {
      light?: string,
      main?: string,
      dark?: string,
    };
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    white: true;
    blue: true;
    red: true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    white: true;
  }
}

const theme = createTheme({
  palette: {
    primary: { main: '#2C2C2C' },
    white: { main: '#FFFFFF'},
    blue: {
      light: '#69B9F6',
      main: '#2196F3',
      dark: '#0C7DD4',
    },
    red: {
      light: '#FF2877',
      main: '#DC004E',
      dark: '#C10047',
    },
    background: {
      default: '#2C2C2C',
      paper: '#2C2C2C',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#888888'
    },
  },
});

export default theme;