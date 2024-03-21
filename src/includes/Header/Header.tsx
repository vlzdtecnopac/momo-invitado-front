import { useNavigate } from "react-router";
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
  const [client, setClient] = useState<any>({});

  useEffect(() => {
    consultClient();
  }, []);

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
    navigate("/");
  };

  return (
    <header className="head">
      <div className="column_start">
        <button
          onClick={() => handleBackHeader()}
          className="back"
        >
          <img
            className="back-icon"
            src={back}
            alt="back"
          />
          <span className="text ">{translate("backText")}</span>
        </button>
      </div>
      <div className="column_center">
        <img
          className="logo"
          src={logoMomo}
          alt=""
        />
      </div>
      <div className="column_end">
        <div className="welcome-text">
          <h3 className="welcome">{translate("welcome")}</h3>
          <h4 className="user-name">
            {localStorage.getItem("client-id")
              ? `${client?.first_name} ${client?.last_name}`
              : "Invitado"}
          </h4>
        </div>
        <img
          className="profile-pic"
          src={momoPic}
          alt="photo"
        />
      </div>
    </header>
  );
}
export default Header;
