import "./NoCashPage.scss";
import mxIcon from "/src/assets/icons/mexico_flag.svg";
import back from "/src/assets/icons/arrow_left.svg";
import usaIcon from "/src/assets/icons/usa_flag.svg";
import coffee from "../../assets/coffee-momo.png";
import { Link } from "react-router-dom";
function NoCashPage() {
  return (
    <div className="no_cash_page">
      <h2 className="title">No efectivo</h2>
      <img
        className="img"
        src={coffee}
        alt=""
      />
      <div className="text">
        <p>
          En MOMO Coffee, estamos comprometidos con la mejora continua de
          nuestros servicios y la seguridad de nuestros clientes y empleados. Es
          por ello que al no manejar efectivo:
        </p>
        <br />
        <ul>
          <li>
            Mejoramos condiciones de higiene y evitamos contaminación de
            productos
          </li>
          <br />
          <li>
            Agilizamos nuestras operaciones para que recibas tu café en pocos
            minutos
          </li>
          <br />
          <li>
            Reducimos riesgos asociados con robos a local y a nuestros clientes
          </li>
        </ul>
        <br />
        <p>
          Nos comprometemos a proporcionar una experiencia de compra eficiente,
          segura y moderna. Para consultas, contáctanos sin dudarlo
        </p>
      </div>
      <div className="btns">
        <div className="left">
          <button className="lang">
            <img
              src={mxIcon}
              className="es-icon"
            ></img>
            <span className="es">Español</span>
          </button>
          <button className="lang">
            <img
              src={usaIcon}
              className="en-icon"
            ></img>
            <span className="en">Ingles</span>
          </button>
        </div>
        <div className="center">
          <Link to="/register" className="btn">
            <h2>Ordena aquí</h2>
          </Link>
        </div>
        <div className="right">
          <Link to="/order-here">
            <div className="back">
              <img
                className="back-icon"
                src={back}
                alt="back"
              />
              <span className="text">Regresar</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NoCashPage;
