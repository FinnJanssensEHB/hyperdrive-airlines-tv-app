import { createSelector } from "@reduxjs/toolkit";
import { StoreState } from "../store.types";
import { ShowState } from "./InitialState";

export const showStateSelector = (state: StoreState): ShowState => state.shows;

export const selectShows = createSelector(
  showStateSelector,
  (state: ShowState) => state?.list || []
);

export const selectShowsError = createSelector(
  showStateSelector,
  (state: ShowState) => state?.error
);
