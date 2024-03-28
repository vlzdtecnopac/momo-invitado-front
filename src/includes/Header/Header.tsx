import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import logoMomo from "../../assets/icons/logo.svg";
import back from "/src/assets/icons/arrow_left.svg";
import momoPic from "../../assets/icons/momo-pic.svg";
import axiosInstance from "../../helpers/axios.helper";
import { useLanguage } from "../../context/Langi18nContext";
import { useEffect, useState } from "react";
import "./Header.scss";

function Header() {
  const { translate } = useLanguage();
  const navigate = useNavigate();
  const [logout, setLogout] = useState<Boolean>(false);
  const [client, setClient] = useState<any>({});

  useEffect(() => {
    consultClient();
  }, []);

  const closeHandlerSidebar = () => {
    setLogout(false);
  };

  const logoutUserClient = () => {
    localStorage.removeItem("client-id");
    navigate("/order-here");
  };

  const consultClient = async () => {
    try {
      const response = await axiosInstance.get(
        `/users/client?client_id=${localStorage.getItem("client-id")}`
      );
      setClient(response.data[0]);
    } catch (e) {
      console.error(e);
    }
  };

  const handleBackHeader = () => {
    navigate(-1);
  };

  return (
    <>
      <header className="head">
        <div className="column_start">
          <button onClick={() => handleBackHeader()} className="back">
            <img className="back-icon" src={back} alt="back" />
            <span className="text ">{translate("backText")}</span>
          </button>
        </div>
        <div className="column_center">
          <img className="logo" src={logoMomo} alt="" />
        </div>
        <div className="column_end">
          <div className="welcome-text">
            {localStorage.getItem("client-id") ? (
              <div
                className="container-info"
                onClick={() => setLogout(!logout)}
              >
                <h3 className="welcome">{translate("welcome")}</h3>
                <h4 className="user-name">
                  {localStorage.getItem("client-id")
                    ? `${client?.first_name} ${client?.last_name}`
                    : " "}
                </h4>
              </div>
            ) : (
              <div className="welcome-text">
                <h3 className="welcome">{translate("welcome")}</h3>
                <h4 className="user-name"> Invitado </h4>
              </div>
            )}
          </div>
          <img className="profile-pic" src={momoPic} alt="photo" />
        </div>
      </header>
      {logout ? (
        <>
          <div
            onClick={() => closeHandlerSidebar()}
            className="shadow-sidebar"
          ></div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="modal-snippet-user"
          >
            <div className="info-profile">
              <div className="info-header">
                <img className="profile-pic" src={momoPic} alt="photo" />
                <div className="col-info">
                  <h3>Mi Cuenta</h3>
                  <p>
                    {localStorage.getItem("client-id")
                      ? `${client?.first_name} ${client?.last_name}`
                      : " "}
                  </p>
                </div>
              </div>
              <div className="info-content">
                  <ul className="list-submenu">
                    <li>Perfil</li>
                  </ul>
                </div>
            </div>
            <div className="close-btn">
              <button onClick={() => logoutUserClient()} className="btn">
                Cerrar Session
              </button>
            </div>
          </motion.div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
export default Header;
