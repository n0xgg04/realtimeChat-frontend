import React from 'react';
import { Provider } from 'react-redux';
import RouterPage from "./routes";
import {configureStore} from "@reduxjs/toolkit";
import allReducers from "./redux/reducers";
import Helmet from "react-helmet"

const store  = configureStore({
    reducer: allReducers,
});

function App() {
  return (
      <Provider store={store}>
          <Helmet>
                <title>Messenger</title>
          </Helmet>
          <RouterPage/>
      </Provider>
  );
}

export default App;

