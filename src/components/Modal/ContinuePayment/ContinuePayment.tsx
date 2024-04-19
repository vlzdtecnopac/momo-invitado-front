import React, { useEffect } from "react";
import { motion } from "framer-motion";
import pay from "/assets/icons/payment-icon.svg";
import { useLanguage } from "../../../context/Langi18nContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./ContinuePayment.scss";

interface ModalProps {
  actionKey: React.Key;
  targetPath: string; // Prop to specify the redirection path
}

const ContinuePayment: React.FC<ModalProps> = ({ actionKey, targetPath }) => {
  const { translate } = useLanguage();
  const navigate = useNavigate(); // Utilize useNavigate hook

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate(targetPath); // Redirect using navigate
    }, 3000); // Set delay to 3 seconds

    return () => clearTimeout(timeoutId); // Cleanup on unmount
  }, [targetPath, navigate]); // Add dependencies for clarity

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
          <h2 className={`text`}>{translate("continueProcess")}</h2>
          <p className={`sub-text`}>{translate("followInstructions")}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ContinuePayment;
