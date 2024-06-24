import { useState } from "react";
import PropTypes from "prop-types";
function ScoreKeeperEx({ numPlayers = 5, target = 3 }) {
  const [scores, setScores] = useState(new Array(numPlayers).fill(0));
  const reset = () => {
    setScores(new Array(numPlayers).fill(0));
  };
  const incrementScore = (i) => {
    return setScores((prevScores) => {
      //   return prevScores.map((el, index) => {
      //     if (index === i) return (el + 1);
      //     return el;
      //   });
      const copy = [...prevScores];
      copy[i] += 1;
      return copy;
    });
  };
  return (
    <div>
      <h1>Score Keeper</h1>
      <ul>
        {scores.map((score, index) => {
          return (
            <li key={index}>
              Player{index + 1}: {score}
              <button onClick={() => incrementScore(index)}>+1</button>
              {scores[index] >= target && <span>WINNER!</span>}
            </li>
          );
        })}
      </ul>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

ScoreKeeperEx.propTypes = {
  numPlayers: PropTypes.number,
  target: PropTypes.number,
};

export default ScoreKeeperEx;
