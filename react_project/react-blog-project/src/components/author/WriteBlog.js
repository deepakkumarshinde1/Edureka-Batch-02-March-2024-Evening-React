import Header from "../user/Header";

function WriteBlog() {
  return (
    <>
      <main>
        <Header />
        <section>
          <section className="blog-area">
            {/* <!-- blog input --> */}
            <section>
              <p className="form-title">Write A Blog</p>
              <form action="" className="main-form">
                <div>
                  <input
                    type="text"
                    placeholder="title"
                    className="input"
                    id="title"
                    value=""
                  />
                </div>
                <div>
                  <textarea
                    id="description"
                    type="text"
                    className="input"
                    placeholder="description"
                    rows="7"
                  ></textarea>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="image url"
                    id="url"
                    className="input"
                    value=""
                  />
                </div>
                <div>
                  <button type="button" id="save-blog" className="btn-save">
                    Save
                    <i className="fa fa-save"></i>
                  </button>
                </div>
              </form>
            </section>
            {/* <!-- image-preview --> */}
            <section>
              <img
                className="image-preview"
                src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
                alt=""
              />
            </section>
          </section>
        </section>
      </main>
    </>
  );
}

export default WriteBlog;
