import { createAction } from "@reduxjs/toolkit";
import { Show } from "./InitialState";

export const fetchShowsAction = createAction("@@SHOWS/FETCH");
export const fetchShowsSuccesAction = createAction<Show[]>(
  "@@SHOWS/FETCH/SUCCES"
);
export const fetchShowsErrorAction = createAction<{ results: Show[] }>(
  "@@SHOWS/FETCH/ERROR"
);
