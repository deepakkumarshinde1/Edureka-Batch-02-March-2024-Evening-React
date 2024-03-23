import { call, put } from "redux-saga/effects";
import { makeLoginService, saveUserService } from "./blog.service";
import {
  saveLoginDetails,
  setErrorMessage,
  userRegistrationUpdate,
} from "../blog.slice";

export function* saveUserHandler(action) {
  let { data } = yield call(saveUserService, action.payload);
  // redux action call
  if (data) {
    yield put(userRegistrationUpdate(true));
  } else {
    yield put(userRegistrationUpdate(false));
  }
}

export function* makeLoginHandler(action) {
  let { data } = yield call(makeLoginService, action.payload);
  // redux action call
  if (data.length > 0) {
    yield put(saveLoginDetails({ user: data[0], popUp: true }));
  } else {
    yield put(setErrorMessage("Username Or Password is wrong, try again"));
  }
}
