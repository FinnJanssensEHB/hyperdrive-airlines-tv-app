import React, { useEffect, useState } from "react";
import "./scss/Header.scss";

function Header() {
  const [time, setTime] = useState<string>("00:00:00");
  const [country, setcountry] = useState<string>("");

  let date = new Date().toDateString();

  useEffect(() => {
    getGeoInfo();
    setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);
  }, []);

  async function getGeoInfo() {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setcountry(data.country_name || "Country not available");
  }

  return (
    <header>
      <div className="info-container">
        <h3>{country}</h3>
        <h3>{date}</h3>
        <h3>{time}</h3>
      </div>
      <h1>AIRLINES TV MAGAZINE</h1>
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
