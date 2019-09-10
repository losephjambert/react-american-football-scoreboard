import React, { useState } from 'react';
import Game from './Game';

export default function StartGame() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    homeTeam: {
      name: '',
      color: '',
    },
    awayTeam: {
      name: '',
      color: '',
    },
    periodLength: null,
    numPeriods: null,
  });

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(!submitted);
  };

  const handleOnChange = (key, value) => {
    console.log(key, value);
    setFormData(prevState => {
      return { ...prevState, [key]: value };
    });
  };

  if (submitted) return <Game gameInfo={formData} initialAwayScore={0} initialHomeScore={0} />;

  return (
    <div className='form-container'>
      <form action='' onSubmit={e => handleSubmit(e)}>
        <div>
          <label htmlFor='homeTeamName'>Home Team Name:</label>
          <input id='homeTeamName' type='text' onChange={e => handleOnChange('home', e.target.value)} />
        </div>
        <div>
          <label htmlFor='homeTeamColor'>Home Team Color:</label>
          <input id='homeTeamColor' type='text' />
        </div>
        <div>
          <label htmlFor='awayTeamName'>Away Team Name:</label>
          <input id='awayTeamName' type='text' />
        </div>
        <div>
          <label htmlFor='awayTeamColor'>Away Team Color:</label>
          <input id='awayTeamColor' type='text' />
        </div>
        <div>
          <label htmlFor='periodLength'>Period Length:</label>
          <input id='periodLength' type='number' min={1} max={12} placeholder={12} />
        </div>
        <div>
          <label htmlFor='numPeriods'>Number of Periods:</label>
          <input id='numPeriods' type='number' min={1} max={4} placeholder={1} />
        </div>
        <div>
          <button type='submit'>Start Game</button>
        </div>
      </form>
    </div>
  );
}
