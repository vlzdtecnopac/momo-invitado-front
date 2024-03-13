import logoMomo from "../../assets/icons/logo.svg";
import momoPic from "../../assets/icons/momo-pic.svg";

import back from "/src/assets/icons/arrow_left.svg";
import "./Header.scss";

function Header() {
  return (
    <header className="head">
      <div className="column_start">
        <div className="back">
          <img
            className="back-icon"
            src={back}
            alt="back"
          />
          <span className="text ">Regresar</span>
        </div>
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
          <h3 className="Welcome">Bienvenido</h3>
          <h4 className="name">Invitado</h4>
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
