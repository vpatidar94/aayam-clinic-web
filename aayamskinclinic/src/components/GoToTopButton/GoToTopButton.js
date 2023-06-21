import React, { useState } from 'react';
import "./GoToTopButton.css";

const GoToTopButton = () => {

    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    window.addEventListener('scroll', handleScroll);
    return(
        <>
        {showButton && (
        <button className='go-to-top-button ' onClick={scrollToTop}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffffff" d="M12 6l8 8h-5v8h-6v-8h-5l8-8z"/>
          </svg> 
        </button>)}
        
        </>
    )


}


export default GoToTopButton;