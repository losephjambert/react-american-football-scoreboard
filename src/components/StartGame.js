import React, { useState } from "react";
import Game from "./Game";

export default function StartGame() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    homeTeamName: "",
    homeTeamColor: "",
    awayTeamName: "",
    awayTeamColor: "",
    periodLength: null,
    numPeriods: null
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

  if (submitted)
    return (
      <Game gameInfo={formData} initialAwayScore={0} initialHomeScore={0} />
    );

  return (
    <div className="form-container">
      <form action="" onSubmit={e => handleSubmit(e)}>
        <div>
          <label htmlFor="homeTeamName">Home Team Name:</label>
          <input
            id="homeTeamName"
            type="text"
            onChange={e => handleOnChange("homeTeamName", e.target.value)}
          />
        </div>
        <div>
          <fieldset>
            <legend>Home Team Color:</legend>
            <label htmlFor="homeTeamRed">Red</label>
            <input
              id="homeTeamRed"
              type="radio"
              name="color"
              value="red"
              onChange={e => handleOnChange("homeTeamColor", e.target.value)}
            />
            <label htmlFor="homeTeamBlue">Blue</label>
            <input
              id="homeTeamBlue"
              type="radio"
              name="color"
              value="lightblue"
              onChange={e => handleOnChange("homeTeamColor", e.target.value)}
            />
            <label htmlFor="homeTeamSalmon">Salmon</label>
            <input
              id="homeTeamSalmon"
              type="radio"
              name="color"
              value="salmon"
              onChange={e => handleOnChange("homeTeamColor", e.target.value)}
            />
          </fieldset>
        </div>
        <div>
          <label htmlFor="awayTeamName">Away Team Name:</label>
          <input
            id="awayTeamName"
            type="text"
            onChange={e => handleOnChange("awayTeamName", e.target.value)}
          />
        </div>
        <div>
          <fieldset>
            <legend>Away Team Color:</legend>
            <label htmlFor="awayTeamOrange">Orange</label>
            <input
              id="awayTeamOrange"
              type="radio"
              name="color"
              value="orange"
              onChange={e => handleOnChange("awayTeamColor", e.target.value)}
            />
            <label htmlFor="awayTeamGoldenrod">Goldenrod</label>
            <input
              id="awayTeamGoldenrod"
              type="radio"
              name="color"
              value="goldenrod"
              onChange={e => handleOnChange("awayTeamColor", e.target.value)}
            />
            <label htmlFor="awayTeamPurple">Purple</label>
            <input
              id="awayTeamPurple"
              type="radio"
              name="color"
              value="rebeccapurple"
              onChange={e => handleOnChange("awayTeamColor", e.target.value)}
            />
          </fieldset>
        </div>
        <div>
          <label htmlFor="periodLength">Period Length:</label>
          <input
            id="periodLength"
            type="number"
            min={1}
            max={12}
            placeholder={12}
            onChange={e => handleOnChange("periodLength", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="numPeriods">Number of Periods:</label>
          <input
            id="numPeriods"
            type="number"
            min={1}
            max={4}
            placeholder={1}
            onChange={e => handleOnChange("numPeriods", e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Start Game</button>
        </div>
      </form>
    </div>
  );
}
