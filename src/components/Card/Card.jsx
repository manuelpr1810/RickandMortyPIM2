import { Link } from 'react-router-dom';
import React from 'react';
import styles from "./Card.module.css";
import { connect } from 'react-redux';
import {addFav, removeFav} from "../../redux/actions";



 function Card(props) {
   const {name, id, image, onClose, addFav, removeFav, myFavorites} = props;
   //  status, species, gender, origin, <= son props que retire de la vista de la card en home
   const [isFav, setIsFav] = React.useState(false);


   React.useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, props.id]);

   const handleFavorite = () =>{
      isFav ? removeFav(id) : addFav(props)
      setIsFav(!isFav)
   };


   return (
      <div className={styles.divcharacter}>
         <button className={styles.buttoncharacter} onClick={()=>{onClose(id)}}> X </button>

         {isFav ? (<button className={styles.buttoncharacter2} onClick={handleFavorite}>❤️</button>) : (
            <button className={styles.buttoncharacter2} onClick={handleFavorite}>🤍</button>)}
            
         <img  className={styles.imgcharacter} src={image} alt='character' />
         <div className={styles.innerdivcharacter}>

         <Link to= {`/detail/${id}`}>
         <h2 className={styles.h2character}>{name}</h2>
         </Link>
         {/* <h2 className={styles.h2character}>{status}</h2> */}
         {/* <h2 className={styles.h2character}>{species}</h2> */}
         {/* <h2 className={styles.h2character}>{gender}</h2> */}
         {/* <h2 className={styles.h2character}>{origin?.name}</h2> */}
         </div>
      </div>
   );
}
export function mapDispatchToProps(dispatch) {
   return {
      addFav: (character)=>{dispatch(addFav(character))},
      removeFav: (id)=>{dispatch(removeFav(id))}

   };
};
export function mapStateToProps(state) {
      return {
         myFavorites: state.myFavorites
      }

};

export default connect(mapStateToProps, mapDispatchToProps)(Card);