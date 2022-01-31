import { VFC } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";

export const ReactInnerImageZoom: VFC = () => {
  return (
    <InnerImageZoom
      src="https://gendai.ismcdn.jp/mwimgs/d/5/-/img_d5236bf4daf5b7fba0e7598b48219e71547271.png"
      //   zoomSrc="https://gendai.ismcdn.jp/mwimgs/d/5/-/img_d5236bf4daf5b7fba0e7598b48219e71547271.png"
      zoomScale={2}
      moveType="drag"
    />
  );
};
