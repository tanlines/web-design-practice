import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Workyard from "./pages/Workyard";
import Canva from "./pages/Canva";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/canva" replace />} />
        <Route path="/workyard" element={<Workyard />} />
        <Route path="/canva" element={<Canva />} />
      </Routes>
    </BrowserRouter>
  );
}
