import './App.css';
import React from 'react';

import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainPage />} path="/" />
      </Routes>
    </>
  );
};
export default App;
