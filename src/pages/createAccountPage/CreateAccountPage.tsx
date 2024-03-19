import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LayoutBlank from "../../includes/layout/LayoutBlank";
import logoMomo from "../../assets/icons/logo.svg";
import { useLanguage } from "../../context/Langi18nContext";

import "./CreateAccountPage.scss";

function CreateAccountPage() {
  const { translate } = useLanguage();

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

          <motion.h2
            className="title"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            {" "}
            Registrarme
          </motion.h2>
          <motion.p
            className="subTitle"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            {" "}
            Digita tus datos personales{" "}
          </motion.p>

          <form className="form">
            <div className="section-form">
              <section className="form-group">
                <input
                  name="nombre"
                  placeholder="Nombre"
                  type="text"
                  className="input"
                />
                <i className="icon-user"></i>
              </section>
              <section className="form-group">
                <input
                  name="apellido"
                  placeholder="Apellido"
                  type="text"
                  className="input"
                />
                <i className="icon-user"></i>
              </section>
              <div className="grid-2_xs-2">
                <div
                  className="col-3"
                  style={{ padding: "0px 5px" }}
                >
                  <select className="select">
                    <option>+55</option>
                    <option>+56</option>
                  </select>
                </div>
                <div
                  className="col-9"
                  style={{ padding: "0px 8px" }}
                >
                  <input
                    name="phone"
                    placeholder="Teléfono"
                    type="number"
                    className="input"
                  />
                </div>
              </div>
              <section className="form-group">
                <input
                  name="email"
                  placeholder="Correo Electrónico"
                  type="email"
                  className="input"
                />
                <i className="icon-email"></i>
              </section>
              <div className="term-condition">
                <input
                  type="checkbox"
                  name="check"
                />
                <Link
                  className="link_term"
                  to={`/`}
                >
                  {translate("acceptTerms")}
                </Link>
              </div>
            </div>
            <div className="grid-3_xs-1">
              <div className="col-6">
                <button className="btn-cancelar">
                  {translate("cancelRegister")}
                </button>
              </div>
              <div className="col-6">
                <button
                  type="submit"
                  className="btn-register"
                >
                  {translate("register")}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </LayoutBlank>
  );
}

export default CreateAccountPage;
