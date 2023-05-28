// common imports
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Route, Routes,useNavigate, useLocation} from "react-router-dom";
// styles imports
import './App.css';
// components imports
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import About from "./components/about/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import pathRoutes from './helper/routes.helper';
import Form from './components/Form/Form';
import Favorites from './components/favorites/favorites';
import HomeButton from './components/Homebutton/Homebutton';

function App() {

   const [characters, setCharacters] = useState([]);

   const onSearch= (id) => {
      if (characters.find((character)=> character.id === id))
      {return window.alert('¡ personaje con este ID repetido!');
   }
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

   const clearCharacters = () => {
      setCharacters([]);
    };

    const location = useLocation();

    const [access, setAccess] = useState(false);

    const EMAIL = 'morty@gmail.com';

    const PASSWORD = "Rick1234";

    const navigate = useNavigate();


    const login = (userData) =>{
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
    }

    const guestlogin = () =>{
         setAccess(true);
         navigate('/home');
    }

      useEffect(() => {
         !access && navigate('/');
         },[access, navigate]);  

   return (
      <div className='App'>
         <HomeButton/>

         <Routes>

         {location.pathname === pathRoutes.LOGIN && (
        <Route path={pathRoutes.LOGIN} element={<Form login={login} guestlogin={guestlogin}/>}/>
         )}
          
         
          <Route
          path={pathRoutes.HOME}
          element={
            <>
              <NavBar onSearch={onSearch} onClear={clearCharacters} />
              <Cards characters={characters} onClose={onClose} />
            </>
          }
        />

         <Route path = {pathRoutes.ABOUT} element = {<About/>}/>

         <Route path = {pathRoutes.DETAIL} element = {<Detail/>}/>

         <Route path = {pathRoutes.FAVORITES} element = {<Favorites/>}/>

         </Routes>
      </div>
   );
}
export default App;