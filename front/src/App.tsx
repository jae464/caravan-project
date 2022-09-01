import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import MainPage from './pages/MainPage';
import DetailPage from 'pages/DetailPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/detail' element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
