import React, { useState, useEffect } from "react";
let timeIntervalId;
export default function Timer({ gameOver, sendTime }) {
  let [time, setTime] = useState(0);

  useEffect(() => {
    const incrementTime = () => {
      let newTime = time + 1;
      setTime(newTime);
    };
    timeIntervalId = setTimeout(() => {
      incrementTime();
    }, 1000);
    if (gameOver) {
      //   let updatedTime = JSON.parse(JSON.stringify(time));

      clearInterval(timeIntervalId);
      // setTime(0);
    }
  }, [time, setTime, gameOver, sendTime]);

  //   useEffect(() => {
  //     return function cleanup() {
  //       setTime(0);
  //     };
  //   });

  console.log(timeIntervalId);
  return (
    <div style={{ color: "white", fontSize: 20 }}>
      <span role="img" aria-label="clock" style={{ paddingRight: 10 }}>
        ⏰
      </span>
      {time}
    </div>
  );
}
