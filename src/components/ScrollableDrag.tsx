import { VFC } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

export const ScrollableDrag: VFC = () => {
  return (
    <div>
      <ScrollContainer>
        <img
          alt="sample"
          src="https://gendai.ismcdn.jp/mwimgs/d/5/-/img_d5236bf4daf5b7fba0e7598b48219e71547271.png"
        />
      </ScrollContainer>
    </div>
  );
};
