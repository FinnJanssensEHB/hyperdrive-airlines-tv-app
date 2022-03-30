import { createReducer } from "@reduxjs/toolkit";
import { ShowState, initialState } from "./InitialState";
import * as ACTIONS from "./Actions";

export const showReducer = createReducer<ShowState>(initialState, (builder) => {
  builder.addCase(ACTIONS.fetchShows, (state): ShowState => {
    return {
      ...state,
      loading: true,
      error: "",
      list: [],
    };
  });

  builder.addCase(ACTIONS.fetchShowsSucces, (state, action): ShowState => {
    return {
      ...state,
      loading: false,
      error: "",
      list: action.payload,
    };
  });

  builder.addCase(ACTIONS.fetchShowsError, (state, action): ShowState => {
    return {
      ...state,
      loading: false,
      error: action.payload.toString(),
      list: [],
    };
  });
});
