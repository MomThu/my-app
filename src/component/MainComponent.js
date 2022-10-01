import React from "react";
import { Route, Routes } from 'react-router-dom';
import Login from "./LoginComponent";
import Home from "./HomeComponent";
import Detail from "./DetailComponent";

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
        {/* <Navigate to="/" replace={true} /> */}
      </Routes>
    </div>
  );
}

export default Main;