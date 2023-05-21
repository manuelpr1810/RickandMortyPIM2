import React, { useState } from "react";
import styles from "./Form.module.css";


const validate = (userData, errors, setErrors) => {
    if(!userData.email) setErrors({ ...errors, email:"hey no olvides escribir tu correo"})
};

export default function Form() {
    const [userData, setUserData] = useState({
        email:"",
        password: "",
    });

    const [errors, setErrors] = useState({
        email:"",
        password: "",
    });

    const handleChange = (evento) => {
        const property = evento.target.name;
        const value = evento.target.value;
        setUserData({...userData, [property]: value});
        validate({...userData, [property]: value}, errors, setErrors);
    };

    const submitHandler = (evento) => {
        evento.preventDefault();
        alert("bienvenido");
    };

    return (
        <div className={styles.container}>
        {/* <img src="" alt="avatar" className={styles.imagenestilizada}/> */}
        <h1 className={styles.title}>Iniciar sesión</h1>
        <form className={styles.form} onSubmit={submitHandler}>
          <input
          value={userData.email}
            className={styles.input}
            type="text"
            placeholder="Correo electrónico"
            onChange={handleChange}
            name= "email"
          />
          <input
          value={userData.password}
            className={styles.input}
            type="password"
            placeholder="Contraseña"
            onChange={handleChange}
            name="password"
          />
          <button className={styles.button} type="submit">
            Iniciar sesión
          </button>
        </form>
      </div>
    );
}