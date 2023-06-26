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

   const onSearch= async (id) => {
      let response =  await axios(`http://localhost:3001/rickandmorty/character/${id}`);
    try {
     let { data } = response;
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {window.alert('¡No hay personajes con este ID!');
          };
    } catch (error) { console.log("error en peticion axios onSearch", error);}

   }

   // const onClose = (id) =>{
   //    setCharacters(characters.filter((character)=>character.id !== id))
   // };

   const clearCharacters = () => {
      setCharacters([]);
    };

    const location = useLocation();

    const [access, setAccess] = useState(false);

    const navigate = useNavigate();

    async function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      try {
        let response = await axios(URL + `?email=${email}&password=${password}`)
            const { access } = response.data;
            setAccess(response.data);
            access && navigate('/home'); 
      } catch (error) {console.log("error en peticion axios onSearch", error);}
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
              <Cards characters={characters}
               // onClose={onClose}
                />
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