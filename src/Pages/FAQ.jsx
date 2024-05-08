import React from 'react';
import Accordion from '../components/Accordion/Accordion';

const FAQ = () => {
  const accordionItems = [
    {
      header: 'Can education flashcards be used for all age groups?',
      content: 'Content for section 1',
    },
    {
      header: 'How do education flashcards work?',
      content: 'Content for section 2',
    },
    {
      header: 'Can education flashcards be used for test preparation?',
      content: 'Content for section 3',
    },
  ];

  const gradientStyle = {
    // display:'inline',
    backgroundImage: 'linear-gradient(to right, #051A91, #1F80EB,#1F80EB, #2284F1, #1F80EB)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  };

  return (
    <div className="container mx-auto p-4 lg:w-3/5 xs:w-full ml-16">
      <h1 className="text-6xl font-bold mt-8 mb-8" style={gradientStyle}>FAQ</h1>
      <Accordion items={accordionItems} />
    </div>
  );
};

export default FAQ;
