import React, { useState } from 'react';

const TimerComponent = () => {
  const [timer, setTimer] = useState({ min: 0, sec: 0, ms: 0 });
  const [updateTimer, setUpdateTimer] = useState({ min: 0, sec: 0, ms: 0 });

  const run = () => {
    if (updateTimer.sec >= 60) {
      updateTimer.sec = 0;
      updateTimer.min++;
    }

    if (updateTimer.ms >= 100) {
      updateTimer.ms = 0;
      updateTimer.sec++;
    }

    updateTimer.ms++;
    setTimer({
      min: updateTimer.min,
      sec: updateTimer.sec,
      ms: updateTimer.ms,
    });
  };

  const startTimer = () => {
    run();
    setInterval(run, 10);
  };

  return (
    <div className="timer">
      {timer.min >= 10 ? <p>{timer.min}</p> : <p>0{timer.min}</p>}
      <p>:</p>
      {timer.sec >= 10 ? <p>{timer.sec}</p> : <p>0{timer.sec}</p>}
      {<p>:</p>}
      {timer.ms >= 10 ? <p>{timer.ms}</p> : <p>0{timer.ms}</p>}

      <button onClick={startTimer}>start</button>
    </div>
  );
};

export default TimerComponent;
