import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./AppRouter.tsx";
import { Analytics } from "@vercel/analytics/next";

import "./styles/globals.css";
import "./styles/colours.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Analytics />
    <AppRouter />
  </StrictMode>
);
