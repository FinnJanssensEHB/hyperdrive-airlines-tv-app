import { useSelector } from "react-redux";
import { Show } from "../../Store/Shows/InitialState";
import { selectShows, selectShowsError } from "../../Store/Shows/Selectors";
import { StoreState } from "../../Store/store.types";
import OverviewItem from "./OverviewItem";
import "./Overview.scss";
import Fuse from "fuse.js";
import { useState } from "react";

function Overview() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFilter, setSearchFilter] = useState("All");

  const shows = useSelector<StoreState, Show[]>((state) =>
    selectShows(state, { query: searchQuery, filter: searchFilter })
  );
  const error = useSelector<StoreState, string>(selectShowsError);
  function querySearch(event: any) {
    setSearchQuery(event.target.value);
  }
  function filterSearch(event: any) {
    console.log(event.target.value);
    setSearchFilter(event.target.value);
  }
  return (
    <>
      <div className="overview-container">
        <div className="overview-title-search-container">
          <h1 className="overview-title">TV-shows on today:</h1>
          <select
            className="type-dropdown"
            onChange={filterSearch}
            defaultValue=""
          >
            <option value="">All</option>
            <option value="Animation">Animation</option>
            <option value="Documentary">Documentary</option>
            <option value="Game Show">Game Show</option>
            <option value="News">News</option>
            <option value="Reality">Reality</option>
            <option value="Sports">Sports</option>
            <option value="Talk Show">Talk Show</option>
            <option value="Variety">Variety</option>
          </select>
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
