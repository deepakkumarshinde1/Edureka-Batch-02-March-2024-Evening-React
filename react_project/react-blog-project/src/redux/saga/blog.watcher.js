import { takeLatest } from "redux-saga/effects";
import { makeLoginHandler, saveUserHandler } from "./blog.handler";
import { makeUserLogin, makeUserRegistration } from "../blog.slice";

export function* saveUserWatcher() {
  yield takeLatest(makeUserRegistration.type, saveUserHandler);
}

export function* makeLoginWatcher() {
  yield takeLatest(makeUserLogin.type, makeLoginHandler);
}

// /save-data 4 --> take
