import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginPage from "./page/LoginPage";
import JoinPage from "./page/JoinPage";
import SignupPage from "./page/SignupPage";
import JoinExPage from "./page/JoinExPage";
import JoinKeyPage from "./page/JoinKeyPage";
import JoinCreatePage from "./page/JoinCreatePage";
import MarketPage from "./page/MarketPage";
import MarketDetail from "./page/MarketDetail";
import UsPage from "./page/UsPage";
import MyPage from "./page/myPage";
import MyPageDetail from "./page/MyPageDetail";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "/join", element: <JoinPage /> },
  { path: "/ex", element: <JoinExPage /> },
  { path: "/key", element: <JoinKeyPage /> },
  { path: "/create", element: <JoinCreatePage /> },
  { path: "/market", element: <MarketPage /> },
  { path: "/market/:id", element: <MarketDetail /> },
  { path: "/us", element: <UsPage /> },
  { path: "/my", element: <MyPage /> },
  { path: "/myInfo", element: <MyPageDetail /> },
]);

export default router;
