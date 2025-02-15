import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./main.css";
import Home from "./pages/Home.jsx";
import Quiz from "./pages/Quiz";
import Letter from "./pages/Letter";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/letter" element={<Letter />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
