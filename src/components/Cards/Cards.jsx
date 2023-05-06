import React from 'react'
import styles from "./Cards.module.css";
import Card from '../Card/Card';

export default function Cards(props) {
   const {characters} = props;
   return <div className={styles.divcharacter}>
      {characters.map((character)=>{
         return (
            <Card 
            image={character.image}          
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            />
         )
      })}
   </div>;
}
