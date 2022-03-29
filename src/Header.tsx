import React, { useEffect, useState } from "react";
import "./scss/Header.scss";

function Header() {
  const [time, setTime] = useState<string>("00:00:00");

  let date = new Date().toDateString();

  useEffect(() => {
    setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);
  }, []);

  return (
    <header>
      <div className="info-container">
        <h3>belgium</h3>
        <h3>{date}</h3>
        <h3>{time}</h3>
      </div>
      <h1>AIRLINES TV MAGAZINE</h1>
      <p></p>
    </header>
  );
}

function getCurrentTime() {
  let today = new Date();
  let hours = (today.getHours() < 10 ? "0" : "") + today.getHours();
  let minutes = (today.getMinutes() < 10 ? "0" : "") + today.getMinutes();
  let seconds = (today.getSeconds() < 10 ? "0" : "") + today.getSeconds();
  return hours + ":" + minutes + ":" + seconds;
}

export default Header;
