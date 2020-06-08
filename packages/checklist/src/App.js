import React from "react";
import { ThemeProvider } from "styled-components/macro";
import { Provider } from "react-redux";
import createRootStore from "./store/configureStore";
import Router from './config/router';
import theme, { GlobalStyle } from "./config/theme";

const store = createRootStore();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router/>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
