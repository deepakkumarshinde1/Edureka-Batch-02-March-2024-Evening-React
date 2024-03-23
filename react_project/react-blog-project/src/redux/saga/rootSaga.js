import { all } from "redux-saga/effects";
import { makeLoginWatcher, saveUserWatcher } from "./blog.watcher";

export function* rootSaga() {
  let watcherArray = [saveUserWatcher(), makeLoginWatcher()];
  yield all(watcherArray);
}
