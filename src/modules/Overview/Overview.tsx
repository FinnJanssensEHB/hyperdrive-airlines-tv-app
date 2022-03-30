import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShows } from "../../Store/Shows/Facade";
import { Show, ShowState } from "../../Store/Shows/InitialState";
import { selectShows, selectShowsError } from "../../Store/Shows/Selectors";
import { StoreState } from "../../Store/store.types";
import OverviewItem from "./OverviewItem";
import "./Overview.scss";

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
      <div className="overview-container">
        <h1 className="overview-title">TV-shows on today:</h1>
        {shows.map((show) => {
          return <OverviewItem show={show}></OverviewItem>;
        })}
      </div>
    </>
  );
}

export default Overview;
