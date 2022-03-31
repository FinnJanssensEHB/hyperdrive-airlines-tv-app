import { Dispatch } from "redux";
import { Show } from "./InitialState";
import * as ACTIONS from "./Actions";

export const fetchShows = () => {
  return (dispatch: Dispatch): void => {
    dispatch(ACTIONS.fetchShowsAction());

    fetch("https://api.tvmaze.com/schedule")
      .then(async (response) => {
        if (response.ok) {
          return response.json();
        }

        const { detail } = await response.json();
        return Promise.reject(detail);
      })
      .then((response: any) => {
        const results: Show[] = response.map((result: any): Show => {
          return {
            id: result.id,
            name: result.name,
            airtime: result.airtime,
            summary: result.summary,
            showName: result.show.name,
            showType: result.show.type,
            showId: result.show.id,
            image: result.show.image?.medium || "",
          };
        });

        dispatch(ACTIONS.fetchShowsSuccesAction(results));
      })
      .catch((error: any) => {
        dispatch(ACTIONS.fetchShowsErrorAction(error));
      });
  };
};
