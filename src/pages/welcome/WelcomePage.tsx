import logo from "../../assets/icons/logo.svg";
import kdsOnIcon from "../../assets/icons/kds-on.svg";
import kioskIcon from "../../assets/icons/kiosko.svg";
import Card from "../../components/Card/Card";
import "./WelcomePage.scss";

function WelcomePage() {
  return (
    <div className="component-welcome">
      <div className="logo-container">
        <img
          className="logo"
          src={logo}
          alt="momo-logo"
        />
      </div>
      <div className="text-container">
        <div className="text">
          <h2 className="big-text">¡Bienvenid@!</h2>
          <p className="sub-text">
            Antes de comenzar, <br />
            Espera que se emparejen <br />
            tus dispositivos.
          </p>
        </div>
      </div>
      <div className="kiosko-loader-container">
        <div className="kiosko-loader">
          <div className="store-card">
            <Card
              icon={kioskIcon}
              text="KDS"
              subText="Tienda 1"
              state="Conectado"
            />
          </div>
          <div className="loader"></div>
          <div className="card-group">
            <Card
              icon={kdsOnIcon}
              text="KDS"
              subText="Tienda 1"
              state="Conectado"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
