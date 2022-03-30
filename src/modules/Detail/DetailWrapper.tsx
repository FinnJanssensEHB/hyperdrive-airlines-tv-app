import React, { useEffect, useState } from "react";

import { tvmazeService } from "../../services/tvmaze.service";
import Detail from "./Detail";
import { useLoading } from "../../hooks/useLoading.hook";

import "./DetailWrapper.scss";

function DetailWrapper() {
  const [shows, setShows] = useState<any>(undefined);
  const [showIndex, setShowIndex] = useState(0);
  const isLoading = useLoading(shows);

  useEffect(() => {
    tvmazeService.getShows().then((response) => {
      setShows(response);
    });
  }, []);
  return (
    <>
      {isLoading ? "Loading..." : <Detail item={shows[showIndex]} />}
      <div className="arrow-container">
        <h2
          onClick={() =>
            showIndex > 0 ? setShowIndex(showIndex - 1) : setShowIndex(0)
          }
        >
          [
        </h2>
        <p>{showIndex + 1}</p>
        <h2
          onClick={() =>
            showIndex < shows.length - 1
              ? setShowIndex(showIndex + 1)
              : setShowIndex(shows.length - 1)
          }
        >
          ]
        </h2>
      </div>
    </>
  );
}

export default DetailWrapper;
