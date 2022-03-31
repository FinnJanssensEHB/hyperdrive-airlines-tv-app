import React, { useEffect, useState } from "react";
import * as eightBit from "8bit";

import "./Detail.scss";
import { Show } from "../../Store/Shows/InitialState";

function Detail(props: any) {
  const show: Show = props.show;
  const showDetail = props.showDetail;

  useEffect(() => {
    var img = new Image();
    img.onload = function () {
      eightBit(document.getElementById(show.id + "canvas"), img, 20);
    };
    img.src = show.image;
  }, [show]);

  return (
    <div className="detail-container">
      <header>
        <h2 className="show-name">{show.showName}</h2>
        <h3 className="episode-name">{show.name}</h3>
      </header>
      <div className="detail-content-container">
        <div
          className="show-summary"
          dangerouslySetInnerHTML={{
            __html: show.summary || "(No summary available)",
          }}
        />
        <div>
          <h3>Airtime: {show.airtime || "--"}</h3>
          <h3>Rating: {showDetail.rating?.average || "--"}</h3>
          <p>
            S{showDetail.season} E{showDetail.number}
          </p>
        </div>
        <canvas id={show.id + "canvas"}></canvas>
      </div>
    </div>
  );
}

export default Detail;
