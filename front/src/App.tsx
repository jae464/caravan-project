import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import DetailPage from "pages/DetailPage";
import ReservationPage from "pages/ReservationPage";
import ReservationStatusPage from "pages/ReservationStatusPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/status" element={<ReservationStatusPage />} />
          <Route path="*" element={<>404</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
