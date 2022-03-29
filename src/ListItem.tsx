import React, { useEffect, useState } from "react";
import "./scss/ListItem.scss";
import { tvmazeService } from "./services/tvmaze.service";

function ListItem(props: any) {
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
      <img id={props.item.id} src={props.item.show.image.medium} alt="" />
    </div>
  );
}

export default ListItem;
