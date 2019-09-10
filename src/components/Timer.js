import React, { useState, useEffect } from 'react';
import Moment from 'moment';

/**
 * We want to take the amount prop (in minutes) and use it to set the initial value of our timer (in millis)
 * Then, every 100 millis (one second), call setTime with time minus elapsed time
 * We're going to need useEffect for this...
 */

const Timer = ({ amount }) => {
  const [time, setTime] = useState(amount * 60000);

  const duration = Moment.duration(time);
  const rawMinutes = duration.minutes();
  const rawSeconds = duration.seconds();
  const minutes = rawMinutes < 10 ? `0${rawMinutes}` : `${rawMinutes}`;
  const seconds = rawSeconds < 10 ? `0${rawSeconds}` : `${rawSeconds}`;

  console.log();

  useEffect(() => {
    if (time <= 0) {
      window.alert('Game Over!');
      return () => setTime(0);
    }
    let interval = null;
    interval = setInterval(() => setTime(time => time - 1000), 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className='timer'>
      {minutes}:{seconds}
    </div>
  );
};

export default Timer;
