import React from "react";
import { motion } from "framer-motion";
import coffee from "../../../assets/coffee-momo.png";
import "./FailedPayment.scss";

interface ModalProps {
  actionKey: React.Key;
}

const FailedPayment: React.FC<ModalProps> = ({ actionKey }) => {
  return (
    <div className="modal-container">
      <div className="shadow-effect"></div>
      <motion.div
        key={actionKey}
        className="modal"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: [0, 0.55, 0.2, 1.01],
        }}
      >
        <div className="container">
          <img
            className="img"
            src={coffee}
            alt="momo-coffee"
          />
          <h2 className={`text`}>¡Al parecer algo salió mal!</h2>
          <p className={`sub-text`}>
            <span className="try-again">Intentémoslo de nuevo.</span> <br /> Tu
            pago no pudo ser procesado. Por favor verifica tu tarjeta y vuelve a
            intentar, si no lo logras, considera otra tarjeta o método de pago.{" "}
            <br /> ¡Si hay algún problema, estamos para ayudarte!
          </p>
          <div className="btns">
            <button className="cancel">Cancelar</button>
            <button className=" try">Reintentar pago</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default FailedPayment;
