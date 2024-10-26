import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Footer from "./component/common/Footer";
import App from "./App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export default router;
