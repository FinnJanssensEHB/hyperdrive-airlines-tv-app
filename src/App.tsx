import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./scss/App.scss";
import Home from "./Pages/Home.page";
import Detail from "./Pages/Detail.page";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { fetchShows } from "./Store/Shows/Facade";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShows());
  }, [dispatch]);
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="show">
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
