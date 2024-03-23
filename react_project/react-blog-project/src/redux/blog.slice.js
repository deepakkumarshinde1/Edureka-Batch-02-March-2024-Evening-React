import { createSlice } from "@reduxjs/toolkit";

const BlogSlice = createSlice({
  name: "BlogSlice",
  initialState: {
    blogs: [],
    user: null,
    isUserRegistered: {
      value: null,
      message: "",
    },
    errorMessage: null,
    successMessage: null,
  },
  reducers: {
    makeUserRegistration() {},
    makeUserLogin() {},
    userRegistrationUpdate(state, action) {
      if (action.payload == false) {
        state.isUserRegistered = {
          value: false,
          message: "User Registration fail try again",
        };
      }

      if (action.payload == true) {
        state.isUserRegistered = {
          value: true,
          message: "User Registration done, you can login now",
        };
      }

      if (action.payload == null) {
        state.isUserRegistered = {
          value: null,
          message: "",
        };
      }
    },
    saveLoginDetails(state, action) {
      // action ={ type , payload (data)}
      delete action.payload.user.password;
      state.user = { ...action.payload.user };
      if (action.payload.popUp) {
        state.successMessage = "User Login Successfully";
      }
      localStorage.setItem("user", JSON.stringify(state.user));

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

    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
    resetMessage(state) {
      state.errorMessage = null;
      state.successMessage = null;
    },
  },
});

export default BlogSlice;
// export action
export const {
  saveLoginDetails,
  logout,
  makeUserRegistration,
  userRegistrationUpdate,
  setErrorMessage,
  makeUserLogin,
  resetMessage,
} = BlogSlice.actions;
