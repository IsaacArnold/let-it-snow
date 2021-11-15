import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 100px;
  margin-top: 50px;
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const Hero = () => {
  const cacluateTimeLeft = () => {
    let year = new Date().getFullYear();

    const difference = +new Date(`12/25/${year}`) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(cacluateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(cacluateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <HeroContainer>
      <h1>Experience the magic of Christmas</h1>
      <p>
        <span>
          {timerComponents.length ? (
            <p>🎅 Santa arrives in:</p>
          ) : (
            <p>It's Christmas Day</p>
          )}
        </span>
        <span>
          {timerComponents.length ? (
            timerComponents
          ) : (
            <p>Check your Christmas tree 🎄 🎄 🎄</p>
          )}
        </span>
      </p>
    </HeroContainer>
  );
};

export default Hero;
