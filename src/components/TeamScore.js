//TODO: STEP 1 - Import the useState hook.
import React from 'react';
import '../App.css';

const TeamScore = ({ teamName, score }) => {
  return (
    <div className='team'>
      <h2 className='team__name'>{teamName}</h2>

      <div className='team__score'>{score}</div>
    </div>
  );
};

export default TeamScore;
