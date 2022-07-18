import { useEffect, useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useNavigate } from "react-router-dom";
import { SplitPane } from "react-multi-split-pane";
import styled from "styled-components";
import Image from "./img/mole.jpg";

const Play = () => {
  const [pauseTime, setPauseTime] = useState<number>(1000);
  const [lookTime, setLookTime] = useState<number>(1000);
  const [isLooking, setIsLooking] = useState<boolean>(false);
  const [lookingPlace, setLookingPlace] = useState<number>(); //0:左上、1:右上、2:左下,3:右下
  const [displayCounts, setDisplayCounts] = useState<Array<number>>([
    49, 49, 49, 49,
  ]);
  const handle = useFullScreenHandle();
  const navigate = useNavigate();

  useEffect(() => {
    handle.enter();
  }, []);

  useEffect(() => {
    const getRandomNum = (): number => {
      const min = 0;
      const max = 3;
      let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
      console.log(displayCounts[randomNum]);
      while (displayCounts[randomNum] === 50) {
        randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
      }
      return randomNum;
    };

    let lookInterval = setInterval(
      () => {
        setIsLooking(true);

        if (isLooking) {
          const randomNum = getRandomNum();
          const tmp = displayCounts;
          tmp[randomNum]++;

          setDisplayCounts(tmp);

          setLookingPlace(randomNum);
          setIsLooking(false);
        } else {
          if (
            displayCounts[0] === 50 &&
            displayCounts[1] === 50 &&
            displayCounts[2] === 50 &&
            displayCounts[3] === 50
          ) {
            console.log("ページ遷移");
            navigate("/result");
          }

          setLookingPlace(-1);
          setIsLooking(true);
        }
      },
      isLooking ? lookTime : pauseTime
    );
    return () => {
      clearInterval(lookInterval);
    };
  });
  return (
    <>
      <StyledFullScreen handle={handle}>
        <SplitPane split="horizontal">
          <SplitPane split="vertical">
            <UpperLeft>
              {lookingPlace === 0 && <StyledImg src={Image} />}
            </UpperLeft>
            <UpperRight>
              {lookingPlace === 1 && <StyledImg src={Image} />}
            </UpperRight>
          </SplitPane>

          <SplitPane split="vertical">
            <UnderLeft>
              {lookingPlace === 2 && <StyledImg src={Image} />}
            </UnderLeft>
            <UnderRight>
              {lookingPlace === 3 && <StyledImg src={Image} />}
            </UnderRight>
          </SplitPane>
        </SplitPane>
      </StyledFullScreen>
    </>
  );
};

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;
const StyledFullScreen = styled(FullScreen)`
  background: white;
`;

const UpperRight = styled.div`
  border: solid 3px;
  border-left-width: 1.5px;
  border-color: black;
  height: 100%;
  width: 100%;
`;
const UpperLeft = styled.div`
  border: solid 3px;
  border-right-width: 1.5px;
  border-color: black;
  height: 100%;
  width: 100%;
`;
const UnderRight = styled.div`
  border: solid 3px;
  border-left-width: 1.5px;
  border-color: black;
  height: 100%;
  width: 100%;
`;
const UnderLeft = styled.div`
  border: solid 3px;
  border-right-width: 1.5px;
  border-color: black;
  height: 100%;
  width: 100%;
`;
export default Play;
