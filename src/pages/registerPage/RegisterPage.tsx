import { motion } from "framer-motion";
import imgRegister from "../../assets/register-img.jpg";
import logoMomo from "../../assets/icons/logo.svg";
import LayoutBlank from "../../includes/layout/LayoutBlank";
import { useLanguage } from "../../context/Langi18nContext";
import "./RegisterPage.scss";
import { Link } from "react-router-dom";

function RegisterPage() {
  const { translate, setLanguage, language } = useLanguage();

  return (
    <LayoutBlank>
    <div className="register_page">
      <div className="left">
        <img className="image" src={imgRegister} alt="img" />
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
              <h2 className="h2">{`!${translate("wellcome")}¡`}</h2>
              <p className="parrafo-subtitulo">
                {translate("wellcome")}
                {translate("registerSub")}
              </p>
            </motion.div>
            <div className="register-options">
              <button className="custom-btn registered">
                <span className="icon"></span>
                <span className="text">{translate("customerRegistered")}</span>
              </button>
              <Link to="/create-account" className="custom-btn create">
                <span className="icon"></span>
                <span className="text">{translate("createAccount")}</span>
              </Link>
              <button className="custom-btn no-register">
                <span className="icon"></span>
                <span className="text">{translate("oderAccount")}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </LayoutBlank>
  );
}
export default RegisterPage;
