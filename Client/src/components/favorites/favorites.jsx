import React from 'react';
import { connect, useDispatch } from 'react-redux';
import {  orderCards, filterCards } from '../../redux/actions';
import Card from '../Card/Card';
import styles from "./favorites.module.css";

const Favorites = (props) => {
    const {myFavorites, onClose} = props;

const [aux, setAux] = React.useState(false);
    
const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))
    
  };

    return <div>
        <select onChange={handleOrder}>
            <option value="no-usable">order</option>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
            <option value="no-usable">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
        </select>
        { myFavorites.map((character) =>{
            return (
                <div className={styles.divfavorites}>
                <Card 
                key={character.id}
                image={character.image}          
                id={character.id}
                name={character.name}
                status={character.status}
                species={character.species}
                gender={character.gender}
                origin={character.origin?.name}
                onClose={onClose}
            />
            </div>
            )
        }
        )}
    </div>
};

export function mapStateToProps(state) {
    return {
       myFavorites: state.myFavorites
    }

};

export default connect(mapStateToProps, null)(Favorites);