import "./LoginForm.scss";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className="component-login-form">
      <form
        className="login-form"
        action=""
        method="POST"
      >
        <div className="form-group">
          <input
            placeholder="Correo Electronico"
            type="email"
            id="email"
            name="email"
            className="input"
            required
          />
          <i className="icon icon-email"></i>
        </div>
        <div className="form-group">
          <input
            placeholder="Contraseña"
            type="password"
            id="password"
            name="password"
            className="input"
            required
          />
          <i className="icon icon-password"></i>
        </div>
        <div className="button-container">
          <Link to="/welcome">
            <button
              className="login-buttom"
              type="button"
            >
              Ingresar
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
