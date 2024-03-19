import { Link } from "react-router-dom";
import mxIcon from "/src/assets/icons/mexico_flag.svg";
import back from "/src/assets/icons/arrow_left.svg";
import usaIcon from "/src/assets/icons/usa_flag.svg";
import coffee from "../../assets/coffee-momo.png";
import LayoutBlank from "../../includes/layout/LayoutBlank";
import "./NoCashPage.scss";
import { useLanguage } from "../../context/Langi18nContext";
function NoCashPage() {
  const { translate, setLanguage, language } = useLanguage();

  return (
    <LayoutBlank>
      <div className="no_cash_page">
        <h2 className="title">{translate("notEffective")}</h2>
        <img
          className="img"
          src={coffee}
          alt=""
        />
        <div className="text">
          <p>{translate("subNotEffectiveHeader")}</p>
          <br />
          <ul>
            <li>{translate("subListOne")}</li>
            <br />
            <li>{translate("subListTwo")}</li>
            <br />
            <li>{translate("subListThree")}</li>
          </ul>
          <br />
          <p>{translate("subNotEffectiveFooter")}</p>
        </div>
        <div className="btns">
          <div className="left">
            <button
              style={{
                backgroundColor: language == "es" ? "#EDEBDF" : "transparent",
                border: language == "es" ? "" : "1px solid #EDEBDF",
                color: language == "es" ? "#2E418E" : "#EDEBDF",
              }}
              onClick={() => setLanguage("es")}
              className="lang"
            >
              <img
                src={mxIcon}
                className="es-icon"
              ></img>
              <span className="es">Español</span>
            </button>
            <button
              style={{
                backgroundColor: language == "en" ? "#EDEBDF" : "transparent",
                border: language == "en" ? "" : "1px solid #EDEBDF",
                color: language == "en" ? "#2E418E" : "#EDEBDF",
              }}
              onClick={() => setLanguage("en")}
              className="lang"
            >
              <img
                src={usaIcon}
                className="en-icon"
              ></img>
              <span className="en">English</span>
            </button>
          </div>
          <div className="center">
            <Link
              to="/register"
              className="btn"
            >
              <h2>{translate("orderHere")}</h2>
            </Link>
          </div>
          <div className="right">
            <Link
              className="text-align-back"
              to="/order-here"
            >
              <div className="back">
                <img
                  className="back-icon"
                  src={back}
                  alt="back"
                />
                <span className="text">{translate("backText")}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </LayoutBlank>
  );
}
export default NoCashPage;
