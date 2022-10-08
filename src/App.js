import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/pages/MainPage/MainPage";

import './styles/bootstrap.scss';
import './styles/settings.scss';
import './styles/global.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
