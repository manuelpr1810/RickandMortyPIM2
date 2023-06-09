import React, { useState } from "react";
import styles from "./Form.module.css";


const validate = (userData, errors, setErrors) => {
  let updatedErrors = {};

  if (!userData.email) {
    updatedErrors.email = "Email vacío";
  } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{3})+$/.test(userData.email)) {
    updatedErrors.email = "Email inválido";
  }

  if (userData.email.length > 35) {
    updatedErrors.email = "Email inválido";
  }

  if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{6,10})$/.test(userData.password)) {
    updatedErrors.password = "Contraseña inválida";
  }

  setErrors(updatedErrors);
}

export default function Form(props) {
    const  {login, guestlogin} = props;
    
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
        login(userData);
        
    };

    const handleGuestLogin = () => {
   const guestUserData = {
     email: "guest@example.com",
     password: "guestpassword",
   };
    guestlogin(guestUserData);
 };

    return (
        <div className={styles.container}>
        {/* <img src="" alt="avatar" className={styles.imagenestilizada}/> */}
        <h1 className={styles.title}>Iniciar sesión</h1>
        <form className={styles.form} onSubmit={submitHandler}>
          <input
          value={userData.email}
            className={errors.email ? styles.error : styles.valid}
            type="text"
            placeholder="Correo electrónico"
            onChange={handleChange}
            name= "email"
          />
          <span className={styles.span}>{errors.email}</span>
          <input
          value={userData.password}
            className={errors.password ? styles.error : styles.valid}
            type="password"
            placeholder="Contraseña"
            onChange={handleChange}
            name="password"
          />
          <span className={styles.span}>{errors.password}</span>
          <button onClick={submitHandler} className={styles.button} type="submit">
            Iniciar sesión
          </button>
          <button className={styles.button} onClick={handleGuestLogin}>
        Ingresar como invitado
      </button>
        </form>
      </div>
    );
}