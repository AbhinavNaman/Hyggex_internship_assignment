import React, { useState } from 'react';
import './styles.css'
import idea from '/idea.png'
import volume from '/volume-up.png'


const Flashcard = ({ flashcard }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  function handleFlipLeft() {
    setIsFlipped(true);
  }

  function handleFlipRight() {
    setIsFlipped(false);
  }

  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''} cursor-pointer`} onClick={handleClick}>
   
      <div className="front">
        <button className="button top-left" onClick={handleFlipLeft}><img src={idea} style={{width:'30px'}}/></button>
      <button className="button top-right" onClick={handleFlipRight}><img src={volume} style={{width:'30px'}}/></button>
        <h2>{flashcard.question}</h2>
      </div>
      <div className="back">
      <button className="button top-left" onClick={handleFlipLeft}><img src={idea} style={{width:'30px'}}/></button>
      <button className="button top-right" onClick={handleFlipRight}><img src={volume} style={{width:'30px'}}/></button>
        <h2>{flashcard.answer}</h2>
      </div>
    </div>
  );
};

export default Flashcard;