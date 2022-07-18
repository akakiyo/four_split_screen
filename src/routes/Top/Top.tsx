import Header from "../../components/Header/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Top = () => (
  <>
    <Header />
    <Wrapper>
      <Description> 数字・記号専用のタイピング練習ゲーム</Description>
      <Link to="/play">
        <PlayButton>プレイする</PlayButton>
      </Link>
    </Wrapper>
  </>
);

const Wrapper = styled.div``;
const Description = styled.p`
  color: white;
  font-size: 30px;
`;
const PlayButton = styled.button`
  height: 54px;
  width: 169px;
  color: #fffcfc;
  border-radius: 40px;
  border: none;
  background: #16c4fd;
`;

export default Top;
