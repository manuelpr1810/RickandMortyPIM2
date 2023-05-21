import {NavLink} from "react-router-dom";
import pathRoutes from '../../helper/routes.helper.js';
import styles from "./Homebutton.module.css";
import { FaHome } from 'react-icons/fa';


export default function HomeButton(){

    return (
        <div>
        <NavLink to= {pathRoutes.HOME} >
        <button className={styles.homeButton}><FaHome/>
        </button>
        </NavLink>
        </div>
    )
}
