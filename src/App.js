// common imports
import { useState } from 'react';
import axios from 'axios';
// styles imports
import './App.css';
// components imports
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx';

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
         <NavBar onSearch = {onSearch}/>
         <Cards characters={characters} onClose = {onClose}/>
      </div>
   );
}
export default App;