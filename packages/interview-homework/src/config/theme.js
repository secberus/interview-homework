import { createGlobalStyle } from 'styled-components/macro';
export default {
  palette: {
    dark: {
      background: {
        blueBlack: '#2b3040'
      },
      color: {
        white: '#ffffff',
        dimWhite: '#f0f0f0',
        darkWhite: '#d0d0d0'
      }
    },
    light: {
      background: {
        blueWhite: '#f7f8ff'
      },
      color: {
        black: '#000000',
        darkGray: '#101117',
        blueGray: '#2d2f3b',
      }
    }
  }
}


export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.lightMode ? props.theme.palette.light.background.blueWhite : props.theme.palette.dark.background.blueBlack }
  }
`;