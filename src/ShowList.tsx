import React, { useEffect, useState } from "react";

import { tvmazeService } from "./services/tvmaze.service";
import ListItem from "./ListItem";

function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    tvmazeService.getShows().then((response) => {
      setShows(response);
    });
  });
  return (
    <>
      {shows.map((show) => (
        <ListItem item={show} />
      ))}
    </>
  );
}

export default ShowList;
