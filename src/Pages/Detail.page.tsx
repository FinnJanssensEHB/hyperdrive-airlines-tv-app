import React, { useEffect, useState } from "react";

import { tvmazeService } from "../services/tvmaze.service";
import Detail from "../modules/Detail/Detail";
import { useLoading } from "../hooks/useLoading.hook";

import "../modules/Detail/DetailWrapper.scss";
import { useParams } from "react-router-dom";
import { Show } from "../Store/Shows/InitialState";
import Header from "../Header";

function DetailWrapper() {
  const params = useParams();

  useEffect(() => {
    tvmazeService
      .getShowDetails(params.id?.toString() || "")
      .then((response) => {
        console.log(response);
      });
  }, []);
  return <></>;
}

export default DetailWrapper;
