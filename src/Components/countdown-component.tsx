import React, { FunctionComponent, useState, useEffect } from "react";
import styled from "@emotion/styled";

type PropsType = {
  isMobile: boolean;
};

const CountdownContainer = styled("div")`
  width: ${(isMobile): string => (isMobile ? "50%" : "40%")};
  margin: auto;
  font-size: 40px;
`;

const TimeBucket = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

type TimeType = {
  days: number;
  hours: number;
  minutes: number;
};

const Countdown: FunctionComponent<PropsType> = ({ isMobile }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(2020, 4, 16, 16, 30) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeType>(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <CountdownContainer {...isMobile}>
      <TimeBucket {...isMobile}>
        <div>
          {timeLeft.days} {timeLeft.days === 1 ? "day" : "days"}
        </div>
        <div>
          {timeLeft.hours} {timeLeft.hours === 1 ? "hour" : "hours"}
        </div>
        <div>
          {timeLeft.minutes} {timeLeft.minutes === 1 ? "minute" : "minutes"}
        </div>
      </TimeBucket>
    </CountdownContainer>
  );
};

export default Countdown;
