import { Link } from 'react-router-dom';

import styles from "./Card.module.css";


export default function Card(props) {
   const {name, id, status, species, gender, origin, image, onClose} = props;
   return (
      <div className={styles.divcharacter}>
         <button className={styles.buttoncharacter} onClick={()=>{onClose(id)}}> X </button>
         <img  className={styles.imgcharacter} src={image} alt='character' />
         <div className={styles.innerdivcharacter}>

         <Link to= {`/detail/${id}`}>
         <h2 className={styles.h2character}>{name}</h2>
         </Link>
         <h2 className={styles.h2character}>{status}</h2>
         <h2 className={styles.h2character}>{species}</h2>
         <h2 className={styles.h2character}>{gender}</h2>
         <h2 className={styles.h2character}>{origin.name}</h2>
         </div>
      </div>
   );
}
