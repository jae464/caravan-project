import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "pages/MainPage";
import DetailPage from "pages/DetailPage";
import ReservationPage from "pages/ReservationPage";
import ReservationStatusPage from "pages/ReservationStatusPage";
import { RecoilRoot } from "recoil";
import LoginPage from "pages/LoginPage";
import SignUpPage from "pages/SignUpPage";
import MeetingRoomStatusPage from "pages/MeetingRoomStatusPage";

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route
              path="/reservationStatus"
              element={<ReservationStatusPage />}
            />
            <Route path="/status" element={<MeetingRoomStatusPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="*" element={<>404</>} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
