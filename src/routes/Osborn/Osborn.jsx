import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Sound1 from "./music/1000Hz.mp3";
import Sound2 from "./music/2000Hz.mp3";

const Osborn = () => {
  const [play1, ExposedData] = useSound(Sound1);
  const [play2, ExposedData2] = useSound(Sound2);
  const [isListening, setIsListening] = useState(false);
  const [playCounts, setPlayCounts] = useState([0, 0]);
  const [sumPlayCounts, setSumPlayCounts] = useState([0, 0]);
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  // const count1 = 75;
  // const count2 = 25;
  const count1 = 3;
  const count2 = 1;
  const [experimentCount, setExperimentCount] = useState(0);
  const date = moment().format("YYY-MM-DD");
  useEffect(() => {
    const getRandomNum = () => {
      const min = 0;
      const max = 1;
      let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
      let check = randomNum === 0 ? count1 : count2;
      while (playCounts[randomNum] === check) {
        randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        check = randomNum === 0 ? count1 : count2;
      }

      return randomNum;
    };
    let lookInterval = setInterval(() => {
      if (isListening) {
        const randomNum = getRandomNum();
        const tmp = playCounts;
        tmp[randomNum]++;
        const tmp2 = sumPlayCounts;
        setPlayCounts(tmp);
        tmp2[randomNum]++;
        setSumPlayCounts(tmp2);
        setIsListening(false);
        const startTime = moment().format("HH:mm:ss.SSSS");
        console.log(startTime);
        setData([
          ...data,
          {
            count: count,
            musicNum: randomNum,
            startTime: startTime,
          },
        ]);
        setCount(count + 1);
        // const time = now.getFullYear
        if (randomNum === 0) {
          console.log("実行1");
          play1();
        } else {
          console.log("実行2");
          play2();
        }
      } else {
        ExposedData.stop();
        ExposedData2.stop();
        const tmp = data;
        console.log(data);
        if (tmp.length - 1 >= 0) {
          tmp[tmp.length - 1]["endTime"] = moment().format("HH:mm:ss.SSSS");
        }
        if (playCounts[0] === count1 && playCounts[1] === count2) {
          const tmpCount = experimentCount + 1;
          setExperimentCount(tmpCount);
          if (tmpCount === 25) {
            navigate("/result", { state: { data: data, date: date } });
          } else {
            const tmp = playCounts;
            tmp[0] = 0;
            tmp[1] = 0;
            setPlayCounts(tmp);
          }
        }
        setIsListening(true);
      }
    }, 200);
    return () => {
      clearInterval(lookInterval);
    };
  });
  return (
    <>
      <div>高頻度曲：{sumPlayCounts[0]}回</div>
      <div>低頻度曲：{sumPlayCounts[1]}回</div>
    </>
  );
};

export default Osborn;
