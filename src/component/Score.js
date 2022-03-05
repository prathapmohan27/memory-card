import React from 'react';

function Score(props) {
  const { score, bestScore } = props.scores;
  return (
    <div className="scoreContainer">
      <div className="score">
        <h2>SCORE:</h2>
        <h2>{score}</h2>
      </div>
      <div className="score">
        <h2>BEST SCORE:</h2>
        <h2>{bestScore}</h2>
      </div>
    </div>
  );
}

export default Score;
