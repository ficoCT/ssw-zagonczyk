import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
  );
}

export default App;
