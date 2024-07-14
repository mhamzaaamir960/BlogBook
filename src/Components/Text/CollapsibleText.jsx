// src/components/CollapsibleText.jsx
import React, { useState } from "react";
import "./CollapsibleText.css";

const CollapsibleText = ({ text, maxLength = 100 }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div className="collapsible-text">
        {isExpanded ? text : `${text.slice(0, maxLength)}...`}
        <button onClick={toggleExpand} className="toggle-button">
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      </div>
    );
  };
  
  export default CollapsibleText;
