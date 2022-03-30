import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShows } from "../../Store/Shows/Facade";
import { Show, ShowState } from "../../Store/Shows/InitialState";
import { selectShows, selectShowsError } from "../../Store/Shows/Selectors";
import { StoreState } from "../../Store/store.types";

function Overview() {
  const shows = useSelector<StoreState, Show[]>(selectShows);
  const error = useSelector<StoreState, string>(selectShowsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShows());
  }, []);
  console.log(shows);
  return (
    <>
      <ul>
        {shows.map((show) => {
          return <li>{show.name}</li>;
        })}
      </ul>
    </>
  );
}

export default Overview;
