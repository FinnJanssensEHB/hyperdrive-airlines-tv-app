import { useSelector } from "react-redux";
import { Show, ShowState } from "../../Store/Shows/InitialState";
import { selectShows, selectShowsError } from "../../Store/Shows/Selectors";
import { StoreState } from "../../Store/store.types";
import OverviewItem from "./OverviewItem";
import "./Overview.scss";
import Fuse from "fuse.js";
import { useState } from "react";

function Overview() {
  const [searchQuery, setSearchQuery] = useState("");

  const shows = useSelector<StoreState, Show[]>((state) =>
    selectShows(state, searchQuery)
  );
  const error = useSelector<StoreState, string>(selectShowsError);
  function querySearch(event: any) {
    setSearchQuery(event.target.value);
  }
  return (
    <>
      <div className="overview-container">
        <div className="overview-title-search-container">
          <h1 className="overview-title">TV-shows on today:</h1>
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            onKeyUp={querySearch}
          />
        </div>
        {shows.map((show) => {
          return <OverviewItem show={show} key={show.id}></OverviewItem>;
        })}
      </div>
    </>
  );
}

export default Overview;
