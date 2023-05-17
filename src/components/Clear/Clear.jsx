import React from 'react';
import styleNav from "./Clear.module.css"

const ClearButton = ({ onClick }) => {
    
    
    return (
    
    <button className={styleNav.Clear} onClick={onClick}>
      CLEAR
    </button>
  );
};

export default ClearButton;