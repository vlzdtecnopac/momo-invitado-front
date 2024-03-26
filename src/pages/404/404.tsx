import logo from "../../assets/icons/logo.svg";
import momo from "../../assets/loading_logo.svg";
import { useLanguage } from "../../context/Langi18nContext";

import "./404.scss";
function NotFound() {
  const { translate } = useLanguage();

  return (
    <div className="notfound">
      <div className="notfound-container">
        <div className="notfound-center">
          <img
            className="notfound-logo"
            src={logo}
            alt="logo"
          />
          <img
            className="notfound-logo"
            src={momo}
            alt="logo"
          />
          <h2 className="fail">{translate("sorry")}</h2>
          <h2 className="notfound-text">
            <span className="notfound-space">Error 404</span> <br />
            <span className="notfound-space">{translate("noFound")}</span>
            <br />
          </h2>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
