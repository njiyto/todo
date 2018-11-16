import React from "react";
import { render } from "react-dom";
import App from "./screens/Main";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers/index";

const store = createStore(reducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
