import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="border mb-2 rounded-md border-blue-500 p-2">
          <div
            className="flex justify-between items-center py-2 px-4 cursor-pointer "
            onClick={() => toggleAccordion(index)}
          >
            <div className="font-semibold">{item.header}</div>
            <div
              // className={`transform transition-transform ${
              //   expandedIndex === index ? 'rotate-0' : 'rotate-180'
              // }`}
              className={`transform transition-transform duration-1200 `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    expandedIndex === index ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"
                  }
                />
              </svg>
            </div>
          </div>
          <div
            className={`accordion-content bg-white py-2 px-4 ${
              expandedIndex === index ? "block" : "hidden"
            } transition-all`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
