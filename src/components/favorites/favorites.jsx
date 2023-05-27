import React from 'react';
import { connect } from 'react-redux';
import { onClose } from '../../redux/actions';
import Card from '../Card/Card';
// import styles from "./favorites.module.css";

const Favorites = (props) => {
const {myFavorites, onClose} = props;
const handleOnClose = (id) => {
    onClose(id);
  };

    return <div>
        { myFavorites.map((character) =>{
            return (
                <Card 
            image={character.image}          
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin?.name}
            onClose = {handleOnClose}
            />
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

export default connect(mapStateToProps, { onClose })(Favorites);