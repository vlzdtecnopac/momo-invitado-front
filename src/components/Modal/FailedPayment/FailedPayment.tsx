import React from "react";
import { motion } from "framer-motion";
import coffee from "/assets/coffee-momo.png";
import { useLanguage } from "../../../context/Langi18nContext";
import "./FailedPayment.scss";

interface ModalProps {
  actionKey: React.Key;
}

const FailedPayment: React.FC<ModalProps> = ({ actionKey }) => {
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
            src={coffee}
            alt="momo-coffee"
          />
          <h2 className={`text`}>¡{translate("wentWrong")}!</h2>
          <p className={`sub-text`}>
            <span className="try-again">{translate("tryAgain")}</span> <br />
            {translate("tryAgainText")}
            <p className="sub-text">¡{translate("problemHelp")}!</p>
          </p>
          <div className="btns">
            <button className="cancel">{translate("cancel")}</button>
            <button className=" try">{translate("retryPayment")}</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default FailedPayment;
