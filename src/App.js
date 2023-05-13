// common imports
import { useState } from 'react';
import axios from 'axios';
import {Route, Routes} from "react-router-dom";
// styles imports
import './App.css';
// components imports
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import About from "./components/about/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import pathRoutes from './helper/routes.helper';

function App() {

   const [characters, setCharacters] = useState([]);

   const onSearch= (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) =>{
      setCharacters(characters.filter((character)=>character.id !== Number(id)))
   };

   return (
      <div className='App'>
         <NavBar onSearch = {onSearch} />

         <Routes>

         <Route path = {pathRoutes.HOME} element = {
         <Cards characters={characters} onClose = {onClose} />}/>
         
         <Route path = {pathRoutes.ABOUT} element = {<About/>}/>

         <Route path = {pathRoutes.DETAIL} element = {<Detail/>}/>

         </Routes>
      </div>
   );
}
export default App;