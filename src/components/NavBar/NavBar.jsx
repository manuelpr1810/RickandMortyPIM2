import React from 'react'
import {NavLink} from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar';
import styleNav from "./NavBar.module.css";
import pathRoutes from '../../helper/routes.helper.js';

const NavBar = (props) => {
    const {onSearch} = props;
    return <div className={styleNav.container}>
        <SearchBar onSearch = {onSearch} />

        <NavLink to= {pathRoutes.ABOUT} className={({isActive})=> isActive ? ".active" : ".disable"} >
        <button >About</button>
        </NavLink>
        
        <NavLink to= {pathRoutes.HOME} className={({isActive})=> isActive ? ".active" : ".disable"} >
        <button>Home</button>
        </NavLink>
    </div>;
};
export default NavBar;