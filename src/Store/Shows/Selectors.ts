import { createSelector } from "@reduxjs/toolkit";
import { StoreState } from "../store.types";
import { ShowState } from "./InitialState";

export const showStateSelector = (state: StoreState): ShowState => state.shows;

export const selectShows = createSelector(
  showStateSelector,
  (state: ShowState) => {
    console.log(state);
    return state?.list || [];
  }
);

export const selectShowsError = createSelector(
  showStateSelector,
  (state: ShowState) => state?.error
);

export const selectSpecificShow = createSelector(
  [(state: StoreState) => state.shows.list, (state, id: number) => id],
  (list, id) => {
    console.log(list);
    console.log(id);

    return list.find((item) => item.showId === id);
  }
);
