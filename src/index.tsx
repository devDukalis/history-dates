import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";

import "./scss/min-reset.scss";
import "./scss/fonts.scss";
import "./index.scss";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
