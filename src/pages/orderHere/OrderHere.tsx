import isotipo from "/src/assets/icons/isotipo.svg";
import logo from "/src/assets/icons/logo.svg";
import "./OrderHere.scss";
function OrderHere() {
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
            <i className="es-icon"></i>
            <span className="es">Español</span>
          </div>
          <div className="lang">
            <i className="en-icon"></i>
            <span className="en">Ingles</span>
          </div>
        </div>
        <div className="left">
          <div>No aceptamos efectivo. Descubre por qué</div>
        </div>
      </div>
    </div>
  );
}
export default OrderHere;
