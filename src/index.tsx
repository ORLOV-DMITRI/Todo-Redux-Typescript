import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store, persister } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persister} loading={null}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
