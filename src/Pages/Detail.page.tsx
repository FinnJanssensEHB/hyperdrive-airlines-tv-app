import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { tvmazeService } from "../services/tvmaze.service";
import Detail from "../modules/Detail/Detail";
import { useSelector, useDispatch } from "react-redux";
import { Show } from "../Store/Shows/InitialState";
import {
  selectShows,
  selectShowsError,
  selectSpecificShow,
} from "../Store/Shows/Selectors";
import { StoreState } from "../Store/store.types";

function DetailWrapper() {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const show = useSelector<StoreState>((state) =>
    selectSpecificShow(state, parseInt(params.id || "0"))
  );
  const [showDetail, setShowDetail] = useState();

  useEffect(() => {
    setLoading(true);

    tvmazeService
      .getShowDetails(params.id?.toString() || "")
      .then((response) => {
        setShowDetail(response[0]);
      }).finally(() => {
        setLoading(false);
      });
  }, [params.id]);
  return (
    <>
      {loading ? <p>Loading...</p> : <Detail showDetail={showDetail} show={show}></Detail>}
    </>
  );
}

export default DetailWrapper;
