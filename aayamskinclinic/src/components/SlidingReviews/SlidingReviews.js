import React, { useState, useEffect } from 'react';
import people from '../../const/reviewData';
import './SlidingReviews.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SlidingReviews = () => {
  const [index, setIndex] = useState(0);
  const {name, job, text} = people[index];

  const checkNumber = (number) => {
    if(number > people.length - 1){
      return 0;
    }
    else if(number < 0){
      return people.length - 1;
    }
    return number;
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    }) 
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    }) 
  }

  const randomPerson = () => {
    let randomNumber = Math.floor (Math.random() * people.length);
    if(randomNumber === index ){
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextPerson();
    }, 2000);

    return () => {
      clearInterval(interval);
   }; 
  }, [index]);

  return(
  <>
  <div className='review-container'>
  <article className="review">
      <h4 className="author">{name}</h4>
      <p className="jon">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>  
      </div>
      <button className="random-btn" onClick={randomPerson}>
          Suprise Me!
        </button>
  </article>;
  </div>
  </>)
};

export default SlidingReviews;


