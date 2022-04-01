import { createSelector } from "@reduxjs/toolkit";
import Fuse from "fuse.js";
import { StoreState } from "../store.types";
import { Show, ShowState } from "./InitialState";

export const showStateSelector = (state: StoreState): ShowState => state.shows;

export const selectShows = createSelector(
  [
    (state: StoreState) => state.shows.list,
    (state, filterObject: { query: string; filter: string }) => filterObject,
  ],
  (list, { query, filter }) => {
    let filteredShows: Show[] = [];

    console.log(filter);

    if (filter != "All") {
      filteredShows = list.filter((show) => show.showType == filter);
    } else {
      filteredShows = [...list];
    }

    if (query) {
      const fuse = new Fuse(filter ? filteredShows : [...list], {
        keys: [
          "showName", // will be assigned a `weight` of 1
          {
            name: "name",
            weight: 2,
          },
        ],
      });
      return fuse.search(query).map((result) => result.item) ?? [];
    } else {
      return filter ? filteredShows : list;
    }
  }
);

export const selectShowsError = createSelector(
  showStateSelector,
  (state: ShowState) => state?.error
);

export const selectSpecificShow = createSelector(
  [(state: StoreState) => state.shows.list, (state, id: number) => id],
  (list, id) => {
    return list.find((item) => item.showId === id);
  }
);
