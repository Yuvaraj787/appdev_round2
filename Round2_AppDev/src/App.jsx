import { useState } from 'react';
import Login from "./login";
import SignUp from "./signup";
import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './homepage';
function App() {
  
   return (
    <div>
          <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Login />} />
            <Route path="/content" element={<Homepage />} />
          </Routes>
          </BrowserRouter>
    </div>
   )
}

export default App
