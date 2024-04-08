import "./Login.scss";
import LoginForm from "../LoginForm/LoginForm";
import imgLogin from "/assets/login-img.jpg";
import logoMomo from "/assets/icons/logo.svg";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="component-login">
      <div className="sidebar-left">
        <motion.img
          className="image"
          src={imgLogin}
          alt="img"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        />
      </div>
      <div className="column-right">
        <div className="center-container">
          <div className="container">
            <motion.img
              className="logo-business"
              src={logoMomo}
              alt="logo-momo"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            />

            <div className="text">
              <h2 className="h2">Iniciar sesión en Kiosko</h2>
              <p className="parrafo-subtitulo">
                Digita tu correo electrónico y contraseña
              </p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
