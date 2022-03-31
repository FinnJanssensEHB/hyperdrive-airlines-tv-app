import React from "react";
import { useSelector } from "react-redux";
import { Show, ShowState } from "../../Store/Shows/InitialState";
import { selectShows, selectShowsError } from "../../Store/Shows/Selectors";
import { StoreState } from "../../Store/store.types";
import OverviewItem from "./OverviewItem";
import "./Overview.scss";

function Overview() {
  const shows = useSelector<StoreState, Show[]>(selectShows);
  const error = useSelector<StoreState, string>(selectShowsError);
  return (
    <>
      <div className="overview-container">
        <div className="overview-title-search-container">
          <h1 className="overview-title">TV-shows on today:</h1>
          <input className="search-input" type="text" placeholder="Search" />
        </div>
        {shows.map((show) => {
          return <OverviewItem show={show} key={show.id}></OverviewItem>;
        })}
      </div>
    </>
  );
}

export default Overview;
