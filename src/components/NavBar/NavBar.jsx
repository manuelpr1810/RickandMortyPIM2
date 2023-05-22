import React from 'react';
import {NavLink} from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar';
import styleNav from "./NavBar.module.css";
import pathRoutes from '../../helper/routes.helper.js';
import RandomSearchButton from '../Random/Random';
import ClearButton from "../Clear/Clear.jsx";

const NavBar = (props) => {
    const {onSearch, onClear} = props;

    const randomIds = Array.from({ length: 826 }, (_, index) => index + 1);
    const handleRandomSearch = () => {
      const randomId = randomIds[Math.floor(Math.random() * randomIds.length)];
      onSearch(randomId);
    };

    

    return <div className={styleNav.container} >
        <SearchBar className={styleNav.buttons} onSearch = {onSearch} />
        <RandomSearchButton  onClick={handleRandomSearch}/>
        <NavLink to={pathRoutes.ABOUT}>
        <button className={styleNav.buttons}>About</button>
        </NavLink>
        
        <ClearButton onClick={onClear} />

    </div>;
};
export default NavBar;