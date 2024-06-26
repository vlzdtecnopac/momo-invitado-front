import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import imgRegister from "/assets/register-img.jpg";
import logoMomo from "/assets/icons/logo.svg";
import LayoutBlank from "../../includes/layout/LayoutBlank";
import back from "/assets/icons/arrow_left.svg";
import { useLanguage } from "../../context/Langi18nContext";
import { LoaderPage } from "../../loader/Loader";

import "./LoginClient.scss";
import axiosInstance from "../../helpers/axios.helper";
import ClientWelcomeComponent from "../../components/clientWelcome/ClientWelcome";

export function EnterByEmail() {
  const { translate } = useLanguage();
  const [success, setSuccess] = useState(null);
  const [loader, isLoader] = useState<Boolean>(false);
  const [inputEmail, setInputEmail] = useState<String>("");
  const [error, setError] = useState("");

  const handlerLoginSession = async (data: any) => {
    try {
      isLoader(true);
      const response = await axiosInstance.post(`/users/client/login`, data);
      setError("");
      setSuccess(response.data[0]);
      isLoader(false);
    } catch (e: any) {
      console.log(`Error login client:  ${e}`);
      setError(e.response.data.msg);
      isLoader(false);
    }
  };

  const selectedEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmail(e.target.value);
  };

  return (
    <>
      {loader ? <LoaderPage /> : ""}
      {error ? <div className="alert-error">{error}</div> : ""}
      <div className="email-option">
        <p className="parrafo-subtitulo">{translate("enterEmail")}</p>
        <div className="input">
          <input
            type="email"
            placeholder={translate("email")}
            className="email"
            onChange={(e) => selectedEmail(e)}
          />
        </div>
        <button
          onClick={() => {
            let data = {
              email: inputEmail,
            };
            handlerLoginSession(data);
          }}
          className="login-btn"
        >
          {translate("signInBtn")}
        </button>
      </div>
      {success !== null && <ClientWelcomeComponent data={success} />}
    </>
  );
}

export function EnterByPhone() {
  const [success, setSuccess] = useState(null);
  const [countries, setCountries] = useState([]);
  const [loader, isLoader] = useState<Boolean>(false);
  const [selectCountryCode, selectedCountryCode] = useState("+57");
  const [inputPhoneValue, setInputPhoneValue] = useState("");
  const [error, setError] = useState("");
  const { translate } = useLanguage();

  useEffect(() => {
    const fetchCountries = async () => {
      isLoader(true);
      try {
        const response = await fetch("/assets/dummy/listCountry.json");
        const data = await response.json();
        setCountries(data);
        isLoader(false);
      } catch (e) {
        isLoader(false);
        console.error("Error fetching countries data:", e);
      }
    };
    fetchCountries();
  }, []);

  const selectedCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    selectedCountryCode(e.target.value);
  };

  const selectedPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPhoneValue(e.target.value);
  };

  const handlerLoginSession = async (data: any) => {
    try {
      isLoader(true);
      const response = await axiosInstance.post(`/users/client/login`, data);
      localStorage.setItem("client-id", response.data[0].client_id);
      setError("");
      isLoader(false);
      setSuccess(response.data[0]);
    } catch (e: any) {
      isLoader(false);
      setError(e.response.data.msg);
      console.log(`Error Login client: ${e}`);
    }
  };

  return (
    <>
      {loader ? <LoaderPage /> : ""}
      {error ? <div className="alert-error">{error}</div> : ""}
      <div className="phone-option">
        <p className="parrafo-subtitulo">{translate("enterPhone")}</p>
        <div className="input">
          <select
            onChange={(e) => selectedCountry(e)}
            value={selectCountryCode}
            className="country_id"
          >
            {countries &&
              countries.length > 0 &&
              countries.map((country: any, index: number) => (
                <option key={index}>{country.dial_code}</option>
              ))}
          </select>
          <input
            type="number"
            placeholder={translate("phone")}
            className="phone"
            onChange={(e) => selectedPhone(e)}
          />
        </div>
        <button
          onClick={() => {
            let data = {
              phone: inputPhoneValue,
              code: selectCountryCode,
            };
            handlerLoginSession(data);
          }}
          className="login-btn"
        >
          {translate("signInBtn")}
        </button>
      </div>
      {success !== null && <ClientWelcomeComponent data={success} />}
    </>
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
                        <button
                          className="text-align-back"
                          onClick={() => stateHandlerLogin("init")}
                        >
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
                        <button
                          className="text-align-back"
                          onClick={() => stateHandlerLogin("init")}
                        >
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
