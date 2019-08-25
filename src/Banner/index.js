import styled from "styled-components";
import BannerImg from "../images/banner.jpg";

export default styled.div`
  height: 600px;
  background-image: url(${BannerImg});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  filter: brightness(0.5);
`;
