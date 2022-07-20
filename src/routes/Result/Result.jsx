import Header from "../../components/Header/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { CSVLink } from "react-csv";

const Result = () => {
  const location = useLocation();
  const data = location?.state?.data;
  const fileName = location?.state?.date + ".csv";
  const headers = [
    { label: "count", key: "count" },
    { label: "musicNum", key: "musicNum" },
    { label: "startTime", key: "startTime" },
    { label: "endTime", key: "endTime" },
  ];
  return (
    <>
      <Header />
      <Wrapper>
        <Description>
          脳波測定は終了です
          <br />
          お疲れ様でした。
        </Description>
        <CSVLink data={data} headers={headers} filename={fileName}>
          Download me
        </CSVLink>
        <br />
        <br />
        <Link to="/">
          <BackButton>Topに戻る</BackButton>
        </Link>
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
const BackButton = styled.button`
  height: 54px;
  width: 169px;
  color: #fffcfc;
  border-radius: 40px;
  border: none;
  background: #16c4fd;
  margin: 0 auto;
`;
export default Result;
