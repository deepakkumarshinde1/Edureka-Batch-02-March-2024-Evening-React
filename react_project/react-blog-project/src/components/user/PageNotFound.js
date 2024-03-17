import { Link } from "react-router-dom";
import Header from "./Header";

function PageNotFound() {
  return (
    <>
      <Header />
      <center>
        <h1 style={{ marginTop: "1rem" }}>
          Page Not Found <span className="fa fa-frown-o"></span>
        </h1>
        <Link to="/">Home</Link>
      </center>
    </>
  );
}

export default PageNotFound;
