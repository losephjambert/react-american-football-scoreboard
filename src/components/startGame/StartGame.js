import React, { useState } from 'react';
import './StartGame.css';
import Game from '../Game';

export default function StartGame() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    homeTeamName: 'Home',
    homeTeamColor: '',
    awayTeamName: 'Away',
    awayTeamColor: '',
    periodLength: 1,
    numPeriods: 1,
  });

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(!submitted);
  };

  const handleOnChange = (key, value) => {
    setFormData(prevState => {
      return { ...prevState, [key]: value };
    });
  };

  if (submitted) return <Game gameInfo={formData} initialAwayScore={0} initialHomeScore={0} />;

  return (
    <div className='form-container'>
      <form action='' onSubmit={e => handleSubmit(e)}>
        <div className='home-team form-section'>
          <h3>Home Team</h3>
          <div>
            <label htmlFor='homeTeamName'>Home Team Name</label>
            <input id='homeTeamName' type='text' onChange={e => handleOnChange('homeTeamName', e.target.value)} />
          </div>
          <div>
            <fieldset>
              <legend>Home Team Color</legend>
              <div>
                <input
                  id='homeTeamRed'
                  type='radio'
                  name='homeColor'
                  value='red'
                  onChange={e => handleOnChange('homeTeamColor', e.target.value)}
                />
                <label htmlFor='homeTeamRed'>Red</label>
              </div>
              <div>
                <input
                  id='homeTeamBlue'
                  type='radio'
                  name='homeColor'
                  value='lightblue'
                  onChange={e => handleOnChange('homeTeamColor', e.target.value)}
                />
                <label htmlFor='homeTeamBlue'>Blue</label>
              </div>
              <div>
                <input
                  id='homeTeamSalmon'
                  type='radio'
                  name='homeColor'
                  value='salmon'
                  onChange={e => handleOnChange('homeTeamColor', e.target.value)}
                />
                <label htmlFor='homeTeamSalmon'>Salmon</label>
              </div>
            </fieldset>
          </div>
        </div>
        <div className='away-team form-section'>
          <h3>Away Team</h3>
          <div>
            <label htmlFor='awayTeamName'>Away Team Name</label>
            <input id='awayTeamName' type='text' onChange={e => handleOnChange('awayTeamName', e.target.value)} />
          </div>
          <div>
            <fieldset>
              <legend>Away Team Color</legend>
              <div>
                <input
                  id='awayTeamOrange'
                  type='radio'
                  name='awayColor'
                  value='orange'
                  onChange={e => handleOnChange('awayTeamColor', e.target.value)}
                />
                <label htmlFor='awayTeamOrange'>Orange</label>
              </div>
              <div>
                <input
                  id='awayTeamGoldenrod'
                  type='radio'
                  name='awayColor'
                  value='goldenrod'
                  onChange={e => handleOnChange('awayTeamColor', e.target.value)}
                />
                <label htmlFor='awayTeamGoldenrod'>Goldenrod</label>
              </div>
              <div>
                <input
                  id='awayTeamPurple'
                  type='radio'
                  name='awayColor'
                  value='rebeccapurple'
                  onChange={e => handleOnChange('awayTeamColor', e.target.value)}
                />
                <label htmlFor='awayTeamPurple'>Purple</label>
              </div>
            </fieldset>
          </div>
        </div>
        <div className='game-details form-section'>
          <h3>Game Details</h3>
          <div>
            <fieldset>
              <legend>Period Length</legend>
              <div>
                <input
                  id='fourMinutes'
                  type='radio'
                  name='periodLength'
                  value='4'
                  onChange={e => handleOnChange('periodLength', Number(e.target.value))}
                />
                <label htmlFor='fourMinutes'>4 minutes</label>
              </div>
              <div>
                <input
                  id='eightMinutes'
                  type='radio'
                  name='periodLength'
                  value='8'
                  onChange={e => handleOnChange('periodLength', Number(e.target.value))}
                />
                <label htmlFor='eightMinutes'>8 minutes</label>
              </div>
              <div>
                <input
                  id='twelveMinutes'
                  type='radio'
                  name='periodLength'
                  value='12'
                  onChange={e => handleOnChange('periodLength', Number(e.target.value))}
                />
                <label htmlFor='twelveMinutes'>12 minutes</label>
              </div>
            </fieldset>
          </div>
          <div>
            <fieldset>
              <legend>Number of Periods</legend>
              <div>
                <input
                  id='oneP'
                  type='radio'
                  name='numPeriods'
                  value='1'
                  onChange={e => handleOnChange('numPeriods', Number(e.target.value))}
                />
                <label htmlFor='oneP'>1 period</label>
              </div>
              <div>
                <input
                  id='twoP'
                  type='radio'
                  name='numPeriods'
                  value='2'
                  onChange={e => handleOnChange('numPeriods', Number(e.target.value))}
                />
                <label htmlFor='twoP'>2 periods</label>
              </div>
              <div>
                <input
                  id='threeP'
                  type='radio'
                  name='numPeriods'
                  value='3'
                  onChange={e => handleOnChange('numPeriods', Number(e.target.value))}
                />
                <label htmlFor='threeP'>3 periods</label>
              </div>
              <div>
                <input
                  id='fourP'
                  type='radio'
                  name='numPeriods'
                  value='4'
                  onChange={e => handleOnChange('numPeriods', Number(e.target.value))}
                />
                <label htmlFor='fourP'>4 periods</label>
              </div>
            </fieldset>
          </div>
        </div>
        <div>
          <button type='submit'>Start Game</button>
        </div>
      </form>
    </div>
  );
}
