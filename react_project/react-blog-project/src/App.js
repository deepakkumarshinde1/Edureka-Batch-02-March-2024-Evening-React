import { Route, Routes } from "react-router-dom";
import Login from "./components/author/Login";
import Home from "./components/user/Home";
import { resetMessage, saveLoginDetails } from "./redux/blog.slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PageNotFound from "./components/user/PageNotFound";
import WriteBlog from "./components/author/WriteBlog";

function App() {
  let dispatch = useDispatch();
  let { errorMessage, successMessage } = useSelector((state) => state.blog);
  let updateUser = () => {
    let user = localStorage.getItem("user");
    if (user !== null) {
      // convert this object to JSON Object
      user = JSON.parse(user);
      dispatch(saveLoginDetails({ user, popUp: false }));
    }
  };
  useEffect(() => {
    updateUser();
  }, []);

  useEffect(() => {
    if (errorMessage !== null) {
      alert(errorMessage);
      resetMessage(null);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (successMessage !== null) {
      alert(successMessage);
      resetMessage();
    }
  }, [successMessage]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write-blog" element={<WriteBlog />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
