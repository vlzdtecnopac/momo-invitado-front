import React from "react";
import { motion } from "framer-motion";
import coffee from "../../../assets/coffee-momo.png";
import { useLanguage } from "../../../context/Langi18nContext";
import "./Terms.scss";

interface ModalProps {
  actionKey: React.Key;
}

const Terms: React.FC<ModalProps> = ({ actionKey }) => {
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
          <h2 className={`text`}>¡{translate("hi")}, MOMO Lovers!</h2>
          <p className={`sub-text`}>
            {translate("momoPrivacy")} <br /> {translate("momoPrivacyData")}
          </p>
          <ol className="ol">
            <li>
              Tus Datos: Recolectamos tu nombre, correo y teléfono para
              brindarte nuestros servicios y enviarte promociones increíbles.
            </li>
            <li>
              Seguridad: Tus datos están seguros con nosotros. Usamos medidas de
              seguridad para protegerlos.
            </li>
            <li>
              Tu Privacidad: No compartimos tu información con nadie más. Tu
              confianza es importante para nosotros.
            </li>
            <li>
              Tus Derechos: Tú tienes control. Puedes acceder, corregir o
              eliminar tus datos cuando quieras.
            </li>
          </ol>
          <p className="sub-text">
            Gracias por confiar en MOMO. <br /> Si tienes preguntas, ¡estamos
            aquí para ayudarte!
          </p>
          <button className="continue">Continuar</button>
        </div>
      </motion.div>
    </div>
  );
};
export default Terms;
