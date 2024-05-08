import React, { useState } from 'react';
import Flashcard from './Flashcard';
import './card.css'

const FlashcardCarousel = ({ flashcards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  return (
    <div className="flashcard-carousel">
      <button className="button prev" onClick={handlePrevClick}>
        Prev
      </button>
      {flashcards.map((flashcard, index) => (
        <Flashcard
          key={index}
          flashcard={flashcard}
          isCurrent={index === currentIndex}
        />
      ))}
      <button className="button next" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default FlashcardCarousel;