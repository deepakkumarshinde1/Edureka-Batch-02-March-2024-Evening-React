import { Route, Routes } from "react-router-dom";
import Login from "./components/author/Login";
import Home from "./components/user/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
