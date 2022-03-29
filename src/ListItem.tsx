import React, { useEffect, useState } from "react";
import * as eightBit from "8bit";

import "./scss/ListItem.scss";

function ListItem(props: any) {
  useEffect(() => {
    var img = new Image();
    img.onload = function () {
      eightBit(document.getElementById(props.item.id + "canvas"), img, 16);
    };
    img.src = props.item.show.image.medium;
  }, []);

  return (
    <div className="c-list-item">
      <div>
        <h2> {props.item.show.name}</h2>
        <h3> {props.item.name}</h3>
        <p>
          {" "}
          {props.item.show.summary
            .replace(/<\/?[^>]+(>|$)/g, "")
            .slice(0, 100)
            .concat("...")}
        </p>
        <b> {props.item.show.type}</b>
      </div>
      <canvas id={props.item.id + "canvas"}></canvas>
      {/* <img id={props.item.id} src={props.item.show.image.medium} alt="" /> */}
    </div>
  );
}

export default ListItem;
