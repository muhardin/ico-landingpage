"use client";
import React from "react";
import { useTimer } from "react-timer-hook";

const CountdownClock = () => {
  // Set the expiration timestamp based on the current time plus the desired duration
  const time = new Date();
  time.setDate(time.getDate() + 91); // 302 days
  time.setHours(time.getHours() + 4); // 2 hours
  time.setMinutes(time.getMinutes() + 9); // 59 minutes
  time.setSeconds(time.getSeconds() + 59); // 59 seconds

  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="single text-center mx-2">
        <h1 className="mb-1" style={{ fontSize: "2rem", width: "60px" }}>
          {days}
        </h1>
        <p className="m-0" style={{ fontSize: "0.75rem" }}>
          days
        </p>
      </div>
      <div className="single text-center mx-2">
        <h1 className="mb-1" style={{ fontSize: "2rem", width: "60px" }}>
          {hours}
        </h1>
        <p className="m-0" style={{ fontSize: "0.75rem" }}>
          hours
        </p>
      </div>
      <div className="single text-center mx-2">
        <h1 className="mb-1" style={{ fontSize: "2rem", width: "60px" }}>
          {minutes}
        </h1>
        <p className="m-0" style={{ fontSize: "0.75rem" }}>
          mins
        </p>
      </div>
      <div className="single text-center mx-2">
        <h1 className="mb-1" style={{ fontSize: "2rem", width: "60px" }}>
          {seconds}
        </h1>
        <p className="m-0" style={{ fontSize: "0.75rem" }}>
          secs
        </p>
      </div>
    </div>
  );
};

export default CountdownClock;
