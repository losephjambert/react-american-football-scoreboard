//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const initialHomeScore = 0;
  const [homeScore, setHomeScore] = useState(initialHomeScore);

  const initialAwayScore = 0;
  const [awayScore, setAwayScore] = useState(initialAwayScore);

  function handleClick(team, scoreType) {
    const score = scoreType === 'touchdown' ? 7 : 3;
    if (team === 'home') setHomeScore(homeScore + score);
    if (team === 'away') setAwayScore(awayScore + score);
  }

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
          <button
            className='homeButtons__touchdown'
            data-team='home'
            data-scoretype='touchdown'
            onClick={e => handleClick(e.target.dataset.team, e.target.dataset.scoretype)}>
            Home Touchdown
          </button>
          <button
            className='homeButtons__fieldGoal'
            data-team='home'
            data-scoretype='fieldGoal'
            onClick={e => handleClick(e.target.dataset.team, e.target.dataset.scoretype)}>
            Home Field Goal
          </button>
        </div>
        <div className='awayButtons'>
          <button
            className='awayButtons__touchdown'
            data-team='away'
            data-scoretype='touchdown'
            onClick={e => handleClick(e.target.dataset.team, e.target.dataset.scoretype)}>
            Away Touchdown
          </button>
          <button
            className='awayButtons__fieldGoal'
            data-team='away'
            data-scoretype='fieldGoal'
            onClick={e => handleClick(e.target.dataset.team, e.target.dataset.scoretype)}>
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
