import styled from "styled-components";

const Header = (): JSX.Element => (
  <Wrapper>
    <Title>脳波測定</Title>
  </Wrapper>
);

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: #5dbcff;
`;
const Title = styled.div`
  width: 100%;
  color: #ffffff;
  line-height: 112px;
  letter-spacing: 0.1em;
  text-align: center;
  font-size: 80px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
`;
export default Header;
