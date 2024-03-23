import { memo, useEffect } from "react";

const ImagePreview = (props) => {
  let { image, updateImage, imageInput } = props;

  useEffect(() => {
    updateImage();
  }, [imageInput]);

  console.log("ImagePreview is rendering");
  return (
    <>
      <section>
        <img className="image-preview" src={image} alt="" />
      </section>
    </>
  );
};

export default memo(ImagePreview);
