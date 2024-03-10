import { configureStore } from "@reduxjs/toolkit";

import BlogSlice from "./blog.slice";
const store = configureStore({
  reducer: {
    blog: BlogSlice.reducer,
  },
});

export default store;
