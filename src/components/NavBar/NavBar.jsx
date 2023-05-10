import React from 'react'
import SearchBar from '../SearchBar/SearchBar';

const NavBar = (props) => {
    const {onSearch} = props;
    return <div>
        <SearchBar onSearch = {onSearch} />
    </div>;
};
export default NavBar;