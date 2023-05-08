export interface ColorTokens {
  grey: {
    0: string;
    10: string;
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    1000: string;
  };
  primary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
}

export interface Theme {
  typography: {
    fontFamily: string;
    h1: { fontFamily: string; fontSize: number };
    fontSize: number;
    h2: { fontFamily: string; fontSize: number };
    h3: { fontFamily: string; fontSize: number };
    h4: { fontFamily: string; fontSize: number };
    h5: { fontFamily: string; fontSize: number };
    h6: { fontFamily: string; fontSize: number }
  };
  palette: {
    mode: 'light' | 'dark';
    secondary: { main: string };
    background: { default: string; alt: string };
    tertiary: { main: string };
    neutral: { light: string; dark: string; main: string; mediumMain: string; medium: string };
    primary: { light: string; dark: string; main: string }
  }
}

export const colorTokens: ColorTokens = {
  grey: {
    0: '#FFFFFF',
    10: '#F6F6F6',
    50: '#F0F0F0',
    100: '#E0E0E0',
    200: '#C2C2C2',
    300: '#99A2AD',
    400: '#818C99',
    500: '#6D7885',
    600: '#4D4D4D',
    700: '#333333',
    800: '#1A1A1A',
    900: '#0A0A0A',
    1000: '#000000',
  },
  primary: {
    50: '#E6FBFF',
    100: '#5c9de8',
    200: '#5C9CE6',
    300: '#528BCC',
    400: '#5181B8',
    500: '#3C6A9E',
    600: '#45678F',
    700: '#3A5A7F',
    800: '#28436E',
    900: '#223e68',
  },
};

export const themeSettings = (mode: 'light' | 'dark'): Theme => {
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
          primary: {
            dark: colorTokens.primary[200],
            main: colorTokens.primary[500],
            light: colorTokens.primary[800],
          },
          secondary: {
            main: colorTokens.grey[500],
          },
          tertiary: {
            main: colorTokens.grey[300],
          },
          neutral: {
            dark: colorTokens.grey[100],
            main: colorTokens.grey[200],
            mediumMain: colorTokens.grey[300],
            medium: colorTokens.grey[400],
            light: colorTokens.grey[700],
          },
          background: {
            default: colorTokens.grey[900],
            alt: colorTokens.grey[800],
          },
        }
        : {
          primary: {
            dark: colorTokens.primary[700],
            main: colorTokens.primary[500],
            light: colorTokens.primary[50],
          },
          secondary: {
            main: colorTokens.grey[500],
          },
          tertiary: {
            main: colorTokens.grey[400],
          },
          neutral: {
            dark: colorTokens.grey[700],
            main: colorTokens.grey[500],
            mediumMain: colorTokens.grey[400],
            medium: colorTokens.grey[300],
            light: colorTokens.grey[50],
          },
          background: {
            default: colorTokens.grey[10],
            alt: colorTokens.grey[0],
          },
        }),
    },
    typography: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 32,
      },
      h3: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 24,
      },
      h4: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 20,
      },
      h5: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontSize: 14,
      },
    },
  };
};
