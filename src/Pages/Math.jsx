import React, { useState } from "react";
import Tabs from "../components/Tabs";
import Flashcard from "../components/Flashcard/Flashcard.jsx";
import FlashcardCarousel from "../components/Flashcard/FlashcardCarousel.jsx";
import reload from '/reload.png'
import previous from '/previous.png'
import next from '/next.png'
import fullscreen from '/fullscreen.png'
import plus from '/plus.png'
import frame from '/frame.png'

const Math = ({ title }) => {
  const [flashcards, setFlashcards] = useState([
    {
      question: "9 + 6 + 7x - 2x - 3",
      answer: "5x + 12",
    },
    // {
    //   question: 'What is the capital of Japan?',
    //   answer: 'Tokyo'
    // },
    // {
    //   question: 'What is the capital of Australia?',
    //   answer: 'Canberra'
    // }
  ]);
  return (
    <div className="p-8">
      <h1 className="font-bold text-4xl font-montserrat text-blue-800 pb-10">
        {title}
      </h1>

      <div>
        <Tabs />
        <div className="flashcard-container">
          {flashcards?.map((flashcard, index) => (
            <Flashcard key={index} flashcard={flashcard} />
          ))}
        </div>
        <div className="flex justify-center">
         <div className="flex justify-between m-5" style={{width: '600px'}}>
            <button><img src={reload} style={{width:'40px', height:'40px'}} className="mt-2 cursor-pointer"/></button>
            <button><img src={previous} style={{width:'60px', height:'60px'}} className="cursor-pointer"/></button>
            <span className="font-bold text-2xl mt-2">{'01/10'}</span>
            <button><img src={next} style={{width:'60px', height:'60px'}} className="cursor-pointer"/></button>
            <button><img src={fullscreen} style={{width:'40px', height:'40px'}} className="mt-2 cursor-pointer"/></button>
         </div>
        </div>
      </div>

       
       <div className="flex justify-between mt-10">
          <img src={frame} style={{width: '250px', height:'150px'}}/>
          <button className="flex mt-8">
            <img src={plus} style={{width: '50px', height:'50px'}}/>
            <span className="font-semibold text-2xl mt-2 ml-2" style={{color:'#051A91'}}>Create Flashcard</span>
          </button>
       </div>
    </div>
  );
};

export default Math;
