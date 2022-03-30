import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import "./scss/App.scss";
import Home from "./Pages/Home.page";
import Detail from "./Pages/Detail.page";

function App() {
  return (
    <>
      <Routes>
        <Route path="show">
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
      ;
    </>
  );
}

export default App;
