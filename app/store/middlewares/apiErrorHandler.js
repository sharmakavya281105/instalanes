import { isRejectedWithValue } from "@reduxjs/toolkit";
import Router from "next/router";
import store from "..";

import { setSuccessLoginRedirect } from "../uiSlice";

const apiErrorHandler = (api) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    console.log(action);
    const {
      payload: { status },
      type,
    } = action;
    if (status == "FETCH_ERROR") {
      return next(action);
    }

    switch (Number(status)) {
      case 406:
        store.dispatch(setSuccessLoginRedirect(Router.asPath));
        Router.push("/register");
        break;
    }
  }
  return next(action);
};

export default apiErrorHandler;
