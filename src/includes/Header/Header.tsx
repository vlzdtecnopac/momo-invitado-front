import logoMomo from "../../assets/icons/logo.svg";
import momoPic from "../../assets/icons/momo-pic.svg";
import { useNavigate } from 'react-router';

import back from "/src/assets/icons/arrow_left.svg";
import "./Header.scss";
import { useLanguage } from "../../context/Langi18nContext";

function Header() {
  const { translate, setLanguage, language } = useLanguage();
  const navigate = useNavigate();

  const handleBackHeader = () => {
    navigate(-1)
  }

  return (
    <header className="head">
      <div className="column_start">
        <button onClick={()=> handleBackHeader()} className="back">
          <img
            className="back-icon"
            src={back}
            alt="back"
          />
          <span className="text "> {translate("backText")}</span>
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
          <h3 className="Welcome">{translate("wellcome")}</h3>
          <h4 className="user-name">Invitado</h4>
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
