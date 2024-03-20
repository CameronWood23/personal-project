import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux"
import { setupStore } from "./redux/store.ts"
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/userContext";
import { CategoriesProvider } from "./context/categoryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
        <Provider store={setupStore()}>
      <App />
    </Provider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
