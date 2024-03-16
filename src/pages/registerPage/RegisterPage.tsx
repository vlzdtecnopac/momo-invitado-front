import imgRegister from "../../assets/register-img.jpg";
import logoMomo from "../../assets/icons/logo.svg";
import "./RegisterPage.scss";

function RegisterPage() {
  return (
    <div className="register_page">
      <div className="left">
        <img
          className="image"
          src={imgRegister}
          alt="img"
        />
      </div>
      <div className="column-right">
        <div className="center-container">
          <div className="container">
            <img
              className="logo-business"
              src={logoMomo}
              alt="logo-momo"
            />
            <div className="text">
              <h2 className="h2">¡Bienvenid@!</h2>
              <p className="parrafo-subtitulo">
                Regístrate y descubre un mundo <br /> de beneficios.
              </p>
            </div>
            <div className="register-options">
              <button className="custom-btn registered">
                <span className="icon"></span>
                <span className="text">Cliente registrado</span>
              </button>
              <button className="custom-btn create">
                <span className="icon"></span>
                <span className="text">Crear cuenta</span>
              </button>
              <button className="custom-btn no-register">
                <span className="icon"></span>
                <span className="text">Ordena sin registrarte</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RegisterPage;
