import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginPage from "./page/loginpage";
import SignupPage from "./page/SignupPage";
import MarketPage from "./page/MarketPage";
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "/market", element: <MarketPage /> },
]);

export default router;
