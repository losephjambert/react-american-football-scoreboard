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

  console.log(gameInfo);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <TeamScore teamName={"Lions"} score={homeScore} />
          </div>
          <Timer amount={12} />
          <div className="away">
            <TeamScore teamName={"Tigers"} score={awayScore} />
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
