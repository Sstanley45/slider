import React, { useEffect, useState } from "react";
import "./App.css";
import data from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Slider = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, people])
  
  useEffect(() => {
    let intervalId = setInterval(() => {
      setIndex(index +1)
    }, 3000)
    return () => clearInterval(intervalId)
  },[index])

  return (
    <>
        <div className="title">
          <h2>
            <span>/</span>Reviews
          </h2>
        </div>
      <section className="section">
        <div className="section-center">
          {people.map((person, personIndex) => {
            const { id, name, title, quote, image } = person;
        
            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length -1)
            ) {
              position = "lastSlide";
            }
            return (
              <article className={position} key={id}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" />
              </article>
            );
          })}
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <FaChevronLeft />
          </button>
          <button className="next">
            <FaChevronRight onClick={() => setIndex(index + 1)} />
          </button>
        </div>
      </section>
    </>
  );
};

export default Slider;
