import React from 'react';
import styleNav from "./Random.module.css"

const RandomSearchButton = ({ onClick }) => {
  return (
    
    <button className={styleNav.Ramdom} onClick={onClick}>
      RAMDOM
    </button>
  );
};

export default RandomSearchButton;