import { createSlice } from "@reduxjs/toolkit";

const BlogSlice = createSlice({
  name: "BlogSlice",
  initialState: {
    blogs: [],
    user: null,
  },
  reducers: {
    saveLoginDetails(state, action) {
      // action ={ type , payload (data)}
      delete action.payload.password;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));

      // save --> localStorage.setItem('key','value') --> value must be string
      // read --> localStorage.getItem('key')
      // delete One --> localStorage.remove('key')
      // delete All --> localStorage.clear()
    },
    logout(state) {
      let response = window.confirm("Are your sure to logout ?");
      if (response === true) {
        state.user = null;
        localStorage.removeItem("user");
      }
    },
  },
});

export default BlogSlice;
// export action
export const { saveLoginDetails, logout } = BlogSlice.actions;
