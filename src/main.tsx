import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import ErrorPage from "./pages/errorPage";
import { HomePage } from "./pages/homePage/homePage";
import { RecipePage } from "./pages/recipePage";

const rootElement = document.getElementById("root");

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "recipes/:recipeId",
        element: <RecipePage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  );
} else {
  console.error("Root element not found.");
}
