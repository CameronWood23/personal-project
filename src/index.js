import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux"
import { setupStore } from "./redux/store.ts"
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={setupStore()}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
