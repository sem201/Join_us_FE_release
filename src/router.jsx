import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginPage from "./page/loginpage";
import JoinPage from "./page/JoinPage";
import SignupPage from "./page/SignupPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  { path: "/signup", element: <SignupPage /> },
  {
    path: "/join",
    element: <JoinPage />,
  }
]);

export default router;
