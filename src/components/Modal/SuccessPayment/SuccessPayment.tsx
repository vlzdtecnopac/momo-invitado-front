import React from "react";
import { motion } from "framer-motion";
import clock from "../../../assets/icons/clock.svg";
import { useLanguage } from "../../../context/Langi18nContext";

import "./SuccessPayment.scss";

interface ModalProps {
  actionKey: React.Key;
}

const SuccessPayment: React.FC<ModalProps> = ({ actionKey }) => {
  const { translate } = useLanguage();

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
            src={clock}
            alt="momo-coffee"
          />
          <p className={`sub-text`}>
            {translate("successPayment")}
            <span className="bold">{translate("receipt")}</span>
          </p>

          <div className="btns">
            <button className="cancel">{translate("printed")}</button>
            <button className=" try">Virtual</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default SuccessPayment;
