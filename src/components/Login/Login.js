import React, { useState } from "react";
import Slider from "../SliderCarousel/Slider";
import Dell from "../../image/dell-1.svg";
import Google from "../../image/google-logo-24.png";
import Facebook from "../../image/facebook-logo-24.png";

const Login = () => {
  const [users, setUsers] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUsers({ ...users, [name]: value });
  };

  return (
      <div className="container-login">
        <div className="login">
          <div className="slider">
            <Slider />
          </div>
          <div className="login-content">
            <img src={Dell} alt="" />
            <div className="content">
              <h1>Bienvenido de vuelta</h1>
              <div className="rows">
                <label htmlFor="Email">Email</label>
                <input
                  type="text"
                  placeholder="Ingresa tu email"
                  name="email"
                  value={users.email}
                  onChange={onInputChange}
                />
              </div>
              <div className="rows">
                <div className="password-content">
                  <label htmlFor="Contraseña">Contraseña</label>
                  <span>¿Olvidate tu contraseña?</span>
                </div>
                <input
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  name="password"
                  value={users.password}
                  onChange={onInputChange}
                />
              </div>
              <div className="buttons">
                <div className="modal-container">
                  <button
                    type="submit"
                    className="iniciar-sesion"
                  >
                    Iniciar Sesion
                  </button>
                </div>
                <span>O inicia sesion con</span>
                <div className="btn-accounts">
                  <button>
                    <img className="png-button" src={Google} alt="Google" />
                    &nbsp;Google
                  </button>
                  <button>
                    <img className="png-button" src={Facebook} alt="Facebook" />
                    &nbsp;Facebook
                  </button>
                </div>
              </div>
            </div>
            <strong className="signup">
              ¿Todavia no tenes una cuenta?&nbsp;<p>Crea una ahora</p>
            </strong>
          </div>
        </div>
      </div>
  );
};

export default Login;
