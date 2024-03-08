import isotipo from "/src/assets/icons/isotipo.svg";
import mxIcon from "/src/assets/icons/mexico_flag.svg";
import usaIcon from "/src/assets/icons/usa_flag.svg";
import logo from "/src/assets/icons/logo.svg";
import noCashIcon from "/src/assets/icons/no_cash.svg";

import "./OrderHerePage.scss";
function OrderHerePage() {
  return (
    <div className="order_here_page">
      <div className="imagotipo">
        <img
          className="isotipo"
          src={isotipo}
          alt="isotipo"
        />
        <img
          className="logo"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="btn-container">
        <button className="btn">
          <h2>Ordena aquí</h2>
        </button>
      </div>
      <div className="btns">
        <div className="right">
          <div className="lang">
            <img
              src={mxIcon}
              className="es-icon"
            ></img>
            <span className="es">Español</span>
          </div>
          <div className="lang">
            <img
              src={usaIcon}
              className="en-icon"
            ></img>
            <span className="en">Ingles</span>
          </div>
        </div>
        <div className="left">
          <div className="no-cash">
            <img
              className="icon"
              src={noCashIcon}
              alt="no-cash"
            />
            <span className="text">
              No aceptamos efectivo. <br /> Descubre por qué
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OrderHerePage;
