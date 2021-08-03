import styled from "styled-components";

import {
  ImgModelS,
  ImgModelY,
  ImgModel3,
  ImgModelX,
  ImgSolarPanels,
  ImgSolarRoof,
  ImgAcessories,
} from "../../assets";

export const Container = styled.div`
  .colored:nth-child(1) {
    /* background: #f1ffe7; */
    background-image: url(${ImgModelS});
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(2) {
    /* background: #dfffd9; */
    background-image: url(${ImgModelY});
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(3) {
    /* background: #cdfeca; */
    background-image: url(${ImgModel3});
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(4) {
    /* background: #bbfebb; */
    background-image: url(${ImgModelX});
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(5) {
    /* background: #a9fdac; */
    background-image: url(${ImgSolarPanels});
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(6) {
    /* background: #90f29c; */
    background-image: url(${ImgSolarRoof});
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(7) {
    /* background: #77e68c; */
    background-image: url(${ImgAcessories});
    background-size: cover;
    background-position: center;
  }
`;
