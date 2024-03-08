import "./Login.scss";
import LoginForm from "../LoginForm/LoginForm";
import imgLogin from "../../assets/login-img.jpg";
import logoMomo from "../../assets/icons/logo.svg";

const Login = () => {
  return (
    <div className="component-login">
      <div className="sidebar-left">
        <img
          className="image"
          src={imgLogin}
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
              <h2 className="h2">Iniciar sesión en Kiosko</h2>
              <p className="parrafo-subtitulo">
                Digita tu correo electrónico y contraseña
              </p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
