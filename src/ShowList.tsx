import React, { useEffect, useState } from "react";

import { tvmazeService } from "./services/tvmaze.service";
import ListItem from "./ListItem";
import { useLoading } from "./hooks/useLoading.hook";

function ShowList() {
  const [shows, setShows] = useState<any>(undefined);
  const isLoading = useLoading(shows);

  useEffect(() => {
    tvmazeService.getShows().then((response) => {
      setShows(response);
    });
  }, []);
  return (
    <>
      {isLoading
        ? "Loading..."
        : shows?.map((show: any) => <ListItem item={show} />)}
    </>
  );
}

export default ShowList;
