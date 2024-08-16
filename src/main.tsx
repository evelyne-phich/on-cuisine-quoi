import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

const rootElement = document.getElementById("root");

const queryClient = new QueryClient();

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </StrictMode>
  );
} else {
  console.error("Root element not found.");
}
