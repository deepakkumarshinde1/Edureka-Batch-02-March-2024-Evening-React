import { useSelector } from "react-redux";
import Header from "../user/Header";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ImagePreview from "./ImagePreview";

function WriteBlog() {
  let { user } = useSelector((state) => state.blog);
  let defaultImage =
    "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png";

  let [image, setImage] = useState(defaultImage);
  let [imageInput, setImageInput] = useState("");
  let [title, setTitle] = useState("");
  let [desc, setDesc] = useState("");

  // let image = useMemo(() => {
  //   if (imageInput !== "") {
  //     return imageInput;
  //   } else {
  //     return defaultImage;
  //   }
  // }, [imageInput]);

  let updateImage = useCallback(() => {
    if (imageInput !== "") {
      setImage(imageInput);
    } else {
      setImage(defaultImage);
    }
  }, [imageInput]);

  let updateInput = (event) => {
    let { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
    }

    if (name === "imageInput") {
      setImageInput(value);
    }

    if (name === "desc") {
      setDesc(value);
    }
  };
  useEffect(() => {
    if (user === null) {
      window.location.replace("/login");
    }
  }, [user]);

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
                    name="title"
                    value={title}
                    onChange={updateInput}
                  />
                </div>
                <div>
                  <textarea
                    id="description"
                    type="text"
                    className="input"
                    placeholder="description"
                    name="desc"
                    value={desc}
                    onChange={updateInput}
                    rows="7"
                  ></textarea>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="image url"
                    id="url"
                    className="input"
                    name="imageInput"
                    value={imageInput}
                    onChange={updateInput}
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
            <ImagePreview
              image={image}
              imageInput={imageInput}
              updateImage={updateImage}
            />
          </section>
        </section>
      </main>
    </>
  );
}

export default WriteBlog;
