//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';
import ScoreButton from './components/ScoreButton';

function App({ initialHomeScore, initialAwayScore }) {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(initialHomeScore);
  const [awayScore, setAwayScore] = useState(initialAwayScore);

  const handleClick = (team, scoreType) => {
    const score = scoreType === 'touchdown' ? 7 : 3;
    if (team === 'home') setHomeScore(homeScore + score);
    if (team === 'away') setAwayScore(awayScore + score);
  };

  return (
    <div className='container'>
      <section className='scoreboard'>
        <div className='topRow'>
          <div className='home'>
            <h2 className='home__name'>Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className='home__score'>{homeScore}</div>
          </div>
          <div className='timer'>00:03</div>
          <div className='away'>
            <h2 className='away__name'>Tigers</h2>
            <div className='away__score'>{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className='buttons'>
        <div className='homeButtons'>
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <ScoreButton
            classNames={['homeButtons__touchdown']}
            team='home'
            scoreType='touchdown'
            onClick={handleClick}
            text={'Home Touchdown'}
          />
          <ScoreButton
            classNames={['homeButtons__fieldGoal']}
            team='home'
            scoreType='fieldGoal'
            onClick={handleClick}
            text={'Home Field Goal'}
          />
        </div>
        <div className='awayButtons'>
          <ScoreButton
            classNames={['awayButtons__touchdown']}
            team='away'
            scoreType='touchdown'
            onClick={handleClick}
            text={'Away Touchdown'}
          />
          <ScoreButton
            classNames={['awayButtons__fieldGoal']}
            team='away'
            scoreType='fieldGoal'
            onClick={handleClick}
            text={'Away Field Goal'}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
