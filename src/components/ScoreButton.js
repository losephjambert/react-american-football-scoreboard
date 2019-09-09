import React from 'react';

const ScoreButton = ({ text, onClick, team, scoreType, classNames }) => {
  return (
    <button className={classNames.map(c => `${c} `)} onClick={() => onClick(team, scoreType)}>
      {text}
    </button>
  );
};

export default ScoreButton;
