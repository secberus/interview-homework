import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { Provider } from 'react-redux';
import createStore from './redux/configureStore';
import Routes from './utils/routing';
import theme, {GlobalStyle} from './config/theme';

const store = createStore();

const App = () => {
  return (
    <Provider {...{store}}>
      <ThemeProvider {...{theme}}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}


export default App;
