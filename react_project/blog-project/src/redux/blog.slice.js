import { createSlice } from "@reduxjs/toolkit";

const BlogSlice = createSlice({
  name: "BlogSlice",
  initialState: {
    blogs: [],
    user: null,
  },
  reducers: {
    saveLoginDetails() {},
  },
});

export default BlogSlice;
