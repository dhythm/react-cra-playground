import { Dialog, DialogContent } from "@material-ui/core";
import { VFC } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import styled from "styled-components";

export const ScrollableDrag: VFC = () => {
  return (
    <StyledDialog open>
      <StyledDialogContent>
        <ScrollContainer>
          <StyledImage
            alt="sample"
            src="https://gendai.ismcdn.jp/mwimgs/d/5/-/img_d5236bf4daf5b7fba0e7598b48219e71547271.png"
          />
        </ScrollContainer>
      </StyledDialogContent>
    </StyledDialog>
  );
};

const StyledDialog = styled(Dialog)`
  .tt-MuiDialog-paper {
    padding: 46px;
    overflow: hidden;
  }
`;

const StyledDialogContent = styled(DialogContent)`
  padding: 0;
`;

const StyledImage = styled.img`
  display: block;
  cursor: zoom-out;
  transform: scale(2);
  transform-origin: 0 0;
`;
