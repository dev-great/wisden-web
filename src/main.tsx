import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import QueryProvider from "./components/QueryProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryProvider>
        <App />
      </QueryProvider>
    </Provider>
  </StrictMode>
);
