import React from "react";
import { motion } from "framer-motion";
import coffee from "../../../assets/coffee-momo.png";
import { useLanguage } from "../../../context/Langi18nContext";
import "./PercentageTip.scss";

interface ModalProps {
  actionKey: React.Key;
}

const PercentageTip: React.FC<ModalProps> = ({ actionKey }) => {
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
          <h2 className={`text`}>{translate("percentageAmount")}</h2>
          <input
            className="write"
            type="number"
            placeholder={translate("writeHere")}
          />
          <div className="btns">
            <button className="cancel">{translate("cancel")}</button>
            <button className="add-tip">{translate("addTip")}</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default PercentageTip;
