import Header from "../../components/Header/Header";
import styled from "styled-components";
const Result = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Description>
          脳波測定は終了です
          <br />
          お疲れ様でした。
        </Description>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  text-align: center;
`;
const Description = styled.p`
  color: black;
  font-size: 30px;
`;
export default Result;
