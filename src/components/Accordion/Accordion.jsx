import React, { useState } from 'react';
import './Accordion.css';

function Accordion({ title, children }) {
  const [isExpanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className="accordion">
      <button className="accordion-button" onClick={toggleAccordion}>
        {title}
      </button>
      {isExpanded && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
}

export default Accordion;
