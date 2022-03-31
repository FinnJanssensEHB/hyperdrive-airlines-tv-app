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
  const show = useSelector<StoreState>((state) =>
    selectSpecificShow(state, parseInt(params.id || "0"))
  );

  console.log("show", show);

  const [showDetail, setShowDetail] = useState({ id: 0 });

  useEffect(() => {
    tvmazeService
      .getShowDetails(params.id?.toString() || "")
      .then((response) => {
        console.log(response[0]);
        setShowDetail(response[0]);
      });
  }, []);
  return (
    <>
      <Detail showDetail={showDetail} show={show}></Detail>
    </>
  );
}

export default DetailWrapper;
