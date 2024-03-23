import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import BlogSlice from "./blog.slice";
import { rootSaga } from "./saga/rootSaga";
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    blog: BlogSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
// then run the saga
sagaMiddleware.run(rootSaga);
export default store;
