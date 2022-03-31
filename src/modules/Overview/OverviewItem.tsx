import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Show } from "../../Store/Shows/InitialState";

import "./OverviewItem.scss";

function OverviewItem(props: any) {
  const show: Show = props.show;

  function getTypeColor(type: string): string {
    switch (type) {
      case "Talk Show":
        return "type-green";

      case "Game Show":
        return "type-magenta";
      case "Scripted":
        return "type-cyan";

      case "Sports":
        return "type-red";

      case "Documentary":
        return "type-white";

      case "News":
        return "type-yellow";

      default:
        return "type-blue";
    }
  }

  return (
    <>
      <Link to={"/show/" + show.showId} className="overview-item">
        <p className="item-showName">{show.showName}</p>
        <p className="item-name">{show.name}</p>
        <p className={"item-type " + getTypeColor(show.showType)}>
          {show.showType}
        </p>
        <p className="item-airtime">{show.airtime}</p>
      </Link>
    </>
  );
}

export default OverviewItem;
