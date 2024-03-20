import { motion } from "framer-motion";

import logo from "../../assets/icons/logo.svg";
import coffee from "../../assets/coffee-momo.png";
// import { useLanguage } from "../../context/Langi18nContext";

import "./GuestOrderOk.scss";

function GuestOrderOk() {
  // const { translate } = useLanguage();

  return (
    <div className="success_fully">
      <div className="container">
        <div className="center">
          <img
            className="logo"
            src={logo}
            alt="logo"
          />
          <h2 className={`name`}>¡Genial!</h2>

          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <img
              className="clock"
              src={coffee}
              alt="check-icon"
            />
          </motion.div>

          <p className="text">
            ¡Gracias por tu compra! <br /> En pocos minutos tendrás lo mejor de
            MOMO en tus manos Ayúdanos con tu nombre para llamarte cuando tu
            pedido esté listo, o regístrate para aprovechar beneficios
            exclusivos!
          </p>
          <div className="client">
            <section className="form-group">
              <input
                name="name"
                placeholder="Nombre"
                type="text"
                className="name"
              />
              <i className="icon-user"></i>
            </section>
          </div>
          <div className="btns">
            <button className="shop">Finalizar orden</button>
            <button className="exit">Registrarme</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuestOrderOk;
