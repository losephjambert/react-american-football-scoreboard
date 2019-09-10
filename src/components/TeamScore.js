import React from 'react';
import '../App.css';

const TeamScore = ({ teamName, score }) => {
  return (
    <>
      <h2 className='team__name'>{teamName}</h2>
      <div className='team__score'>{score}</div>
    </>
  );
};

export default TeamScore;
