import React, { useEffect } from "react";
import * as eightBit from "8bit";

import "./Detail.scss";
import { Show, ShowDetail } from "../../Store/Shows/InitialState";

function Detail(props: any) {
  const show: Show = props.show;
  const showDetail: ShowDetail = props.showDetail;

  useEffect(() => {
    if (show) {
      var img = new Image();
      img.onload = function () {
        eightBit(document.getElementById(show.id + "canvas"), img, 20);
      };
      if (show.image == "") {
        img.src =
          "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101027/112815900-geen-afbeelding-beschikbaar-icoon-platte-vector.jpg?ver=6";
      } else {
        img.src = show.image;
      }
      console.log(img.src);
    }
  }, [show]);

  if (!show || !showDetail) {
    return null;
  }

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
          <h3>Rating: {showDetail.rating || "--"}</h3>
          <p>
            S{showDetail.season} E{showDetail.episode}
          </p>
        </div>
        <canvas id={show.id + "canvas"}></canvas>
      </div>
    </div>
  );
}

export default Detail;
