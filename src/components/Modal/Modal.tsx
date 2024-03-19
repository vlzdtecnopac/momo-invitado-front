import React from "react";
import { motion } from "framer-motion";
import pay from "../../assets/icons/payment-icon.svg";
import "./Modal.scss";

interface ModalProps {
  actionKey: React.Key;
}

const Modal: React.FC<ModalProps> = ({ actionKey }) => {
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
            src={pay}
            alt="momo-coffee"
          />
          <h2 className={`text`}>Continua el proceso</h2>
          <p className={`sub-text`}>
            siguiendo las instrucciones de la terminal de pago.{" "}
          </p>
        </div>
      </motion.div>
    </div>
  );
};
export default Modal;
