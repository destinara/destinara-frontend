import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Home, Login, Register, Survey } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router";
import { RequireAuth } from "./components";
import { DestinationDetail } from "./pages/details.pages";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/survey" element={<Survey />} />
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
          <Route path="/destinations/:slug" element={<DestinationDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
