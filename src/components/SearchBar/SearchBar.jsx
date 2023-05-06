import styles from "./SearchBar.module.css";
export default function SearchBar(props) {
   const { onSearch } = props;
   return (
      <div className={styles.divbar}>
         <input className={styles.divsearch} type='search' />
         <button className={styles.buttonbar} onClick={onSearch}>Agregar</button>
      </div>
   );
}
