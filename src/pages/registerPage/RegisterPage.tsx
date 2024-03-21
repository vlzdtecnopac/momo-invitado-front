import { motion } from "framer-motion";
import imgRegister from "../../assets/register-img.jpg";
import logoMomo from "../../assets/icons/logo.svg";
import LayoutBlank from "../../includes/layout/LayoutBlank";
import { useLanguage } from "../../context/Langi18nContext";
import "./RegisterPage.scss";
import { Link } from "react-router-dom";

function RegisterPage() {
  const { translate } = useLanguage();

  return (
    <LayoutBlank>
      <div className="register_page_momo">
        <div className="left">
          <motion.img
            className="image"
            src={imgRegister}
            alt="img"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          />
          <img
            className="image"
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
                <h2 className="h2">{`¡${translate("welcome")}!`}</h2>
                <p className="parrafo-subtitulo">{translate("registerSub")}</p>
              </motion.div>
              <div className="register-options">
                <Link to="../login-client">
                  <button className="custom-btn-register registered">
                    <span className="icon"></span>
                    <span className="text">
                      {translate("customerRegistered")}
                    </span>
                  </button>
                </Link>
                <Link
                  to="/create-account"
                  className="custom-btn-register create"
                >
                  <span className="icon"></span>
                  <p className="text">{translate("createAccount")}</p>
                </Link>
                <Link
                  to="/categories"
                  className="custom-btn-register no-register"
                >
                  <span className="icon"></span>
                  <p className="text">{translate("oderAccount")}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutBlank>
  );
}
export default RegisterPage;
