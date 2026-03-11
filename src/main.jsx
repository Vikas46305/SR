import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { studentStore, persistor } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={studentStore}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);
