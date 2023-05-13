import { useState } from "react";
import styles from "./SearchBar.module.css";



export default function SearchBar(props) {
   const { onSearch} = props;

   const [id, setId] = useState();

   const handleChange = (evento) => {
      setId(evento.target.value);
   };


   return (
      <div className={styles.divbar}>
         <input className={styles.divsearch} 
         type='search' 
         onChange = {handleChange} value = {id}
      />
         <button className={styles.buttonbar} onClick={()=>{onSearch(id);}}>search</button>
      </div>
   );
}
