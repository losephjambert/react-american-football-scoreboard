import React from 'react';

const ScoreButton = ({ text, onClick, team, score, classNames }) => {
  return (
    <button className={classNames.map(c => `${c} `)} onClick={() => onClick(team, score)}>
      {text}
    </button>
  );
};

export default ScoreButton;
