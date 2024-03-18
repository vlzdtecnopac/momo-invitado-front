import { motion } from "framer-motion";
import imgRegister from "../../assets/register-img.jpg";
import logoMomo from "../../assets/icons/logo.svg";
import LayoutBlank from "../../includes/layout/LayoutBlank";
import back from "../../assets/icons/arrow_left.svg";
import { useLanguage } from "../../context/Langi18nContext";
import "./LoginClient.scss";
import { Link } from "react-router-dom";

function LoginClient() {
  const { translate } = useLanguage();

  return (
    <LayoutBlank>
      <div className="register_page">
        <div className="left">
          <img
            className="image"
            src={imgRegister}
            alt="img"
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
              <motion.div
                className="text"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <h2 className="h2">Iniciar sesión</h2>
                <p className="parrafo-subtitulo">
                  Selecciona una opción de ingreso
                </p>
              </motion.div>
              <div className="register-options">
                <button className="custom-btn phone">
                  <span className="icon"></span>
                  <span className="text">Telefono</span>
                </button>

                <button className="custom-btn mail">
                  <span className="icon"></span>
                  <span className="text">Correo Electrónico</span>
                </button>
              </div>
              <Link
                className="text-align-back"
                to="/register"
              >
                <div className="back">
                  <img
                    className="back-icon"
                    src={back}
                    alt="back"
                  />
                  <span className="text">Atras</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LayoutBlank>
  );
}
export default LoginClient;
