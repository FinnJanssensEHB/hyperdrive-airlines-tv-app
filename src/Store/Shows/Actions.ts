import { createAction } from "@reduxjs/toolkit";
import { Show } from "./InitialState";

export const fetchShows = createAction("@@SHOWS/FETCH");
export const fetchShowsSucces = createAction<Show[]>("@@SHOWS/FETCH/SUCCES");
export const fetchShowsError = createAction<{ results: Show[] }>(
  "@@SHOWS/FETCH/ERROR"
);
