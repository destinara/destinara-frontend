import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Login } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/"  /> */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
