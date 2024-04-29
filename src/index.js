import { createRoot } from "react-dom/client";
import "./assets/sass/style.scss";
import React from "react";
import App from "./components/App.tsx";

const root = createRoot(document.querySelector(".app-wrapper"));
root.render(<App title="This is props" />);
