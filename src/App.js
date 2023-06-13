import React,{useEffect, useState} from 'react'
import './App.css';
import Data from './data'
import {FaAngleLeft, FaAngleRight, FaQuoteLeft} from 'react-icons/fa'

function App() {
  const [people, setPeople] = useState(Data)
  const [value, setValue] = useState(0)

  const handleLeftAngle = () => {
    if (value === 0) {
      setValue(people.length -1)
    }
    setValue(prev => prev -1)
  }

    const handleRightAngle = () => {
      if (value === people.length - 1) {
        setValue(0);
      }
      setValue((prev) => prev + 1);
    };
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((prevValue) => (prevValue + 1) % people.length);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [people.length]);
  
  const {image, name, title, quote} = people[value]
  return (
    <div className="App">
      <div>
        <img className="img" src={image} alt="loading image..." />
        <section className="section">
          <FaAngleLeft className="icons" onClick={handleLeftAngle} />
          <div className="name-title">
            <h4>{name}</h4>
            <p>{title}</p>
          </div>
          <FaAngleRight className="icons" onClick={handleRightAngle} />
        </section>
        <article>
          <p>{quote}</p>
        </article>
        <FaQuoteLeft />
      </div>
    </div>
  );
}

export default App;
