import React from 'react';
import { Provider } from 'react-redux';
import RouterPage from "./routes";
import {configureStore} from "@reduxjs/toolkit";
import allReducers from "./redux/reducers";

const store  = configureStore({
    reducer: allReducers,
});

function App() {
  return (
      <Provider store={store}>
        <RouterPage/>
      </Provider>
  );
}

export default App;

