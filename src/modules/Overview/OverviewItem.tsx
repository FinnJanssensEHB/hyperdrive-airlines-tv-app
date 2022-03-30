import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Show } from "../../Store/Shows/InitialState";

import "./OverviewItem.scss";

function OverviewItem(props: any) {
  const show: Show = props.show;
  return (
    <>
      <Link to={"/show/" + show.showId} className="overview-item">
        <p className="item-showName">{show.showName}</p>
        <p className="item-name">{show.name}</p>
        <p className="item-type">{show.showType}</p>
        <p className="item-airtime">{show.airtime}</p>
      </Link>
    </>
  );
}

export default OverviewItem;
