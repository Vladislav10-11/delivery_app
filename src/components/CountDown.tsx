"use client";
import Countdown from "react-countdown";
import React from "react";

const endingDate = new Date("2023-10-11");

const CountDown = () => {
  return (
    <Countdown
      className="font-bold text-5xl text-yellow-300"
      date={endingDate}
    />
  );
};

export default CountDown;
