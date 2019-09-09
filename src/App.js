//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';
import ScoreButton from './components/ScoreButton';
import TeamScore from './components/TeamScore';

function App({ initialHomeScore, initialAwayScore }) {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(initialHomeScore);
  const [awayScore, setAwayScore] = useState(initialAwayScore);

  const handleClick = (team, score) => {
    if (team === 'home') setHomeScore(homeScore + score);
    if (team === 'away') setAwayScore(awayScore + score);
  };

  return (
    <div className='container'>
      <section className='scoreboard'>
        <div className='topRow'>
          <TeamScore teamName={'Lions'} score={homeScore} />
          <div className='timer'>00:03</div>
          <TeamScore teamName={'Tigers'} score={awayScore} />
        </div>
        <BottomRow />
      </section>
      <section className='buttons'>
        <div className='homeButtons'>
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <ScoreButton
            classNames={['homeButtons__touchdown']}
            team='home'
            score={7}
            onClick={handleClick}
            text={'Home Touchdown'}
          />
          <ScoreButton
            classNames={['homeButtons__fieldGoal']}
            team='home'
            score={3}
            onClick={handleClick}
            text={'Home Field Goal'}
          />
        </div>
        <div className='awayButtons'>
          <ScoreButton
            classNames={['awayButtons__touchdown']}
            team='away'
            score={7}
            onClick={handleClick}
            text={'Away Touchdown'}
          />
          <ScoreButton
            classNames={['awayButtons__fieldGoal']}
            team='away'
            score={3}
            onClick={handleClick}
            text={'Away Field Goal'}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
