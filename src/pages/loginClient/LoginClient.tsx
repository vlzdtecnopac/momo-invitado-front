import { motion } from "framer-motion";
import imgRegister from "../../assets/register-img.jpg";
import logoMomo from "../../assets/icons/logo.svg";
import LayoutBlank from "../../includes/layout/LayoutBlank";
import back from "../../assets/icons/arrow_left.svg";
import { useLanguage } from "../../context/Langi18nContext";
import { Link } from "react-router-dom";
import "./LoginClient.scss";
import { useEffect, useState } from "react";

export function EnterByEmail() {
  const { translate } = useLanguage();
  return (
    <div className="email-option">
      <p className="parrafo-subtitulo">{translate("enterEmail")}</p>
      <div className="input">
        <input
          type="email"
          placeholder={translate("email")}
          className="email"
        />
      </div>
      <button className="login-btn">{translate("signInBtn")}</button>
    </div>
  );
}

export function EnterByPhone() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryCode] = useState("+57");
  const { translate } = useLanguage();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("./src/dummy/listCountry.json");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries data:", error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <div className="phone-option">
      <p className="parrafo-subtitulo">{translate("enterPhone")}</p>
      <div className="input">
        <select className="country_id">
        {countries &&
                          countries.length > 0 &&
                          countries.map((country: any, index: number) => (
                            <option
                              key={index}
                              selected={
                                selectedCountryCode === country.dial_code
                              }
                            >
                              {country.dial_code}
                            </option>
                          ))}
        </select>
        <input
          type="number"
          placeholder={translate("phone")}
          className="phone"
        />
      </div>
      <button className="login-btn">{translate("signInBtn")}</button>
    </div>
  );
}

function LoginClient() {
  const { translate } = useLanguage();

  const [stateLogin, setStateLogin] = useState<String>();

  const stateHandlerLogin = (option: string) => {
    setStateLogin(option);
  };

  return (
    <LayoutBlank>
      <div className="login_client_page">
        <div className="left">
          <motion.img
            className="image"
            src={imgRegister}
            alt="logo-momo"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
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
                <h2 className="h2">{translate("signIn")}</h2>
                <p className="parrafo-subtitulo">
                  {translate("selectSignInOption")}
                </p>
              </motion.div>

              {(() => {
                switch (stateLogin) {
                  case "phone":
                    return (
                      <>
                        <EnterByPhone />
                        <button className="text-align-back"  onClick={() => stateHandlerLogin("init")} >
                          <div className="back">
                            <img className="back-icon" src={back} alt="back" />
                            <span className="text">
                              {translate("backText")}
                            </span>
                          </div>
                        </button>
                      </>
                    );
                  case "email":
                    return (
                      <>
                        <EnterByEmail />
                        <button className="text-align-back"  onClick={() => stateHandlerLogin("init")} >
                          <div className="back">
                            <img className="back-icon" src={back} alt="back" />
                            <span className="text">
                              {translate("backText")}
                            </span>
                          </div>
                        </button>
                      </>
                    );
                  default:
                    return (
                      <>
                        <div className="register-options">
                          <button
                            onClick={() => stateHandlerLogin("phone")}
                            className="custom-btn phone"
                          >
                            <span className="icon"></span>
                            <span className="text">{translate("phone")}</span>
                          </button>

                          <button
                            onClick={() => stateHandlerLogin("email")}
                            className="custom-btn mail"
                          >
                            <span className="icon"></span>
                            <span className="text">{translate("email")}</span>
                          </button>
                        </div>
                        <Link className="text-align-back" to="/register">
                          <div className="back">
                            <img className="back-icon" src={back} alt="back" />
                            <span className="text">
                              {translate("backText")}
                            </span>
                          </div>
                        </Link>
                      </>
                    );
                }
              })()}
            </div>
          </div>
        </div>
      </div>
    </LayoutBlank>
  );
}
export default LoginClient;
