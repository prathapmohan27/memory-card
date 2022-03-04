import Card from './component/Card';
import Header from './component/Header';
import data from './assets/data';
import './style/app.scss';
import React, { useState } from 'react';

function App() {
  const [dataArr, setDataArr] = useState([...data]);

  // fisher-yates algorithm
  const shuffleArray = () => {
    let temp = dataArr;
    for (let i = temp.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [temp[i], temp[j]] = [temp[j], temp[i]];
    }
    return temp;
  };

  const handleClick = () => {
    setDataArr([...shuffleArray()]);
  };

  return (
    <div className="App">
      <Header />
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
