import React from "react";
import DetailWrapper from "./modules/Detail/DetailWrapper";
import Header from "./Header";
import Overview from "./modules/Overview/Overview";

import "./scss/App.scss";

function App() {
  return (
    <>
      <Header></Header>
      <Overview></Overview>
    </>
  );
}

export default App;
