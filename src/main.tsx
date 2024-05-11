import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Global } from "@emotion/react";
import globalStyles from "./styles/globalStyles.ts";
import { QueryClient, QueryClientProvider } from "react-query";
import { AlertContextProvider } from "./context/AlertContext";

const client = new QueryClient({
  defaultOptions: {},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <QueryClientProvider client={client}>
      <AlertContextProvider>
        <App />
      </AlertContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
