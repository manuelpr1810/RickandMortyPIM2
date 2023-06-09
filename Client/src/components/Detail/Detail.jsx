import axios from 'axios';
import React, { useState, useEffect  } from 'react';
import { useParams} from "react-router-dom";
import styles from "./Detail.module.css";



export default function Detail() {
    const { id } = useParams();

    const [character, setCharacter] = useState ({});

    useEffect(() => {
      console.log("estoy pidiendo info");
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    

    return (
        <div id= "detail">
            <div className={styles.divContainer}>
             <h1 className={styles.h1}>{character.id}</h1>
               <h1 className={styles.h1}>{character.name}</h1>
               <h2 className={styles.h2}>{character.status}</h2>
               <h2 className={styles.h2}>{character.species}</h2>
               <h2 className={styles.h2}>{character.gender}</h2>
               <h2 className={styles.h2}>{character.origin?.name}</h2> 
                {/* {character.origin} && <h1 >{character.origin.name}</h1> */}
               {/* renderizado forzado */}
               <img className={styles.img} src={character.image} alt='character'/>
            </div>
        </div>
    
    )
}