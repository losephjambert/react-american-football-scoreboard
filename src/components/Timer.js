import React, { useState } from 'react';

const Timer = ({ amount }) => {
  const [time, setTime] = useState(amount);
  return <div className='timer'>00:03</div>;
};

export default Timer;
