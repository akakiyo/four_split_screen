import Header from "../../components/Header/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Top = () => (
  <>
    <Header />
    <Wrapper>
      <Description>4つに分割されている画面に対してどこを見ているか</Description>
      <Link to="/play">
        <PlayButton>測定開始</PlayButton>
      </Link>

      <Description>オズボーン</Description>
      <Link to="/osborn">
        <PlayButton>測定開始</PlayButton>
      </Link>
    </Wrapper>
  </>
);

const Wrapper = styled.div`
  text-align: center;
`;
const Description = styled.p`
  color: black;
  font-size: 30px;
`;
const PlayButton = styled.button`
  height: 54px;
  width: 169px;
  color: #fffcfc;
  border-radius: 40px;
  border: none;
  background: #16c4fd;
  margin: 0 auto;
`;

export default Top;
