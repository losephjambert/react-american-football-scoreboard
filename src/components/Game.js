import React, { useState } from "react";
import "../App.css";
import BottomRow from "../BottomRow";
import ScoreButton from "./ScoreButton";
import TeamScore from "./TeamScore";
import Timer from "./Timer";

function Game({ gameInfo, initialHomeScore, initialAwayScore }) {
  const [homeScore, setHomeScore] = useState(initialHomeScore);
  const [awayScore, setAwayScore] = useState(initialAwayScore);

  const handleClick = (team, score) => {
    if (team === "home") setHomeScore(homeScore + score);
    if (team === "away") setAwayScore(awayScore + score);
  };

  const {
    homeTeamName,
    homeTeamColor,
    awayTeamName,
    awayTeamColor,
    periodLength,
    numPeriods
  } = gameInfo;

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home" style={{ backgroundColor: homeTeamColor }}>
            <TeamScore teamName={homeTeamName} score={homeScore} />
          </div>
          <Timer amount={periodLength} />
          <div className="away" style={{ backgroundColor: awayTeamColor }}>
            <TeamScore teamName={awayTeamName} score={awayScore} />
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <ScoreButton
            classNames={["homeButtons__touchdown"]}
            team="home"
            score={7}
            onClick={handleClick}
            text={"Home Touchdown"}
          />
          <ScoreButton
            classNames={["homeButtons__fieldGoal"]}
            team="home"
            score={3}
            onClick={handleClick}
            text={"Home Field Goal"}
          />
        </div>
        <div className="awayButtons">
          <ScoreButton
            classNames={["awayButtons__touchdown"]}
            team="away"
            score={7}
            onClick={handleClick}
            text={"Away Touchdown"}
          />
          <ScoreButton
            classNames={["awayButtons__fieldGoal"]}
            team="away"
            score={3}
            onClick={handleClick}
            text={"Away Field Goal"}
          />
        </div>
      </section>
    </div>
  );
}

export default Game;
