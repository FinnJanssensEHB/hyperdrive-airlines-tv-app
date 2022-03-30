import React, { useEffect, useState } from "react";
import * as eightBit from "8bit";

import "./Detail.scss";

function Detail(props: any) {
  useEffect(() => {
    var img = new Image();
    img.onload = function () {
      eightBit(document.getElementById(props.item.id + "canvas"), img, 20);
    };
    img.src = props.item.show.image.medium;
  }, [props.item]);

  return (
    <div className="c-list-item">
      <div className="text-container">
        <h2> {props.item.show.name}</h2>
        <h3> {props.item.name}</h3>
        <p>
          {props.item.show.summary
            .replace(/<\/?[^>]+(>|$)/g, "")
            .slice(0, 500)
            .concat("...")}
        </p>
        <p className="show-type"> {props.item.show.type}</p>
      </div>
      <div>
        <canvas id={props.item.id + "canvas"}></canvas>
        <p>{props.item.airtime}</p>
      </div>
      {/* <img id={props.item.id} src={props.item.show.image.medium} alt="" /> */}
    </div>
  );
}

export default Detail;
