import { Component } from "react";

class Blogs extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <section className="blog-area-view">
          <section className="blog-area-view-text">
            <h2 className="title">HTML Tutorial - W3Schools</h2>
            <p className="desc">
              HTML Tutorial ... HTML is the standard markup language for Web
              pages. With HTML you can create your own Website. HTML is easy to
              learn - You will enjoy it!
            </p>
            <p className="author">- Deepakkumar</p>
          </section>
          <img
            className="image-preview-view"
            src="https://www.investopedia.com/thmb/33J47lYaGMBV4nx8vdJNtHBv3cY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/html.asp-final-86da30eff12f46f3a1394efb0b137103.png"
            alt=""
          />
        </section>
      </>
    );
  }
}

export default Blogs;
