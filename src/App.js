import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
import News from "./components/News";

function App() {
  return (
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="news" element={<News />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
  );
}

export default App;
