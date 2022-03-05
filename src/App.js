import Card from './component/Card';
import Header from './component/Header';
import data from './assets/data';
import './style/app.scss';
import React, { useState, useEffect } from 'react';

function App() {
  const [dataArr, setDataArr] = useState([...data]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [prevBestScore, setPrevBestScore] = useState(0);

  // fisher-yates algorithm for shuffle array
  const shuffleArray = () => {
    let temp = dataArr;
    for (let i = temp.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [temp[i], temp[j]] = [temp[j], temp[i]];
    }
    return temp;
  };

  //when score update shuffle the array
  useEffect(() => {
    setDataArr([...shuffleArray()]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

  // update score
  const handleClick = (e) => {
    if (!clicked.includes(e.currentTarget.id)) {
      let temp = clicked;
      temp.push(e.currentTarget.id);
      setClicked([...temp]);
      setScore(clicked.length);
    } else {
      if (prevBestScore < clicked.length) {
        setBestScore(clicked.length);
        setPrevBestScore(clicked.length);
      }
      setScore(0);
      setClicked([]);
    }
  };

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore} />
      <p className="info">
        Get points by clicking on an image but don't click on any more than
        once!
      </p>
      <div className="board">
        {dataArr.map((obj, i) => (
          <Card obj={obj} handleClick={handleClick} key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
