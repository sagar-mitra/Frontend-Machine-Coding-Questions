import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StarRating from "./Questions/01-Star-Rating/StarRating.jsx";
import PasswordGeneratorApp from "./Questions/02-Password-Generator/PasswordGeneratorApp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "star-rating",
    element: <StarRating />,
  },
  {
    path: "password-generator",
    element: <PasswordGeneratorApp />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
