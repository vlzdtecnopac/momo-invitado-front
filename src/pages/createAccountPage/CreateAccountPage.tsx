import { motion } from "framer-motion";
import LayoutBlank from "../../includes/layout/LayoutBlank";
import logoMomo from "../../assets/icons/logo.svg";
import "./CreateAccountPage.scss";

function CreateAccountPage() {
  return (
    <LayoutBlank>
      <div className="create-account-page">
        <div className="section-resgister">
          <motion.img
            className="logo-business"
            src={logoMomo}
            alt="logo-momo"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          />
          <h2>Registrarme</h2>
          <p>Digita tus datos personales</p>
          <div className="section-form">
          <form>
            <input
              name="nombre"
              placeholder="Nombre"
              type="text"
              className="input"
            />
            <input
              name="apellido"
              placeholder="Apellido"
              type="text"
              className="input"
            />
            <input
              name="email"
              placeholder="email"
              type="email"
              className="input"
            />
            <div>
              <input type="checkbox" name="check" /> Acepta nuestros Términos y
              Condiciones de Privacidad
            </div>
            <div className="grid-3_xs-1">
              <div className="col-6">
                <button>Cancelar</button>
              </div>
              <div className="col-6">
                <button type="submit">Registreme</button>
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>
    </LayoutBlank>
  );
}

export default CreateAccountPage;
