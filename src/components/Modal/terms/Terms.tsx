import { motion } from "framer-motion";
import coffee from "../../../assets/coffee-momo.png";
import { useLanguage } from "../../../context/Langi18nContext";
import "./Terms.scss";

const Terms = () => {
  const { translate } = useLanguage();

  return (
    <div className="modal-container">
      <div className="shadow-effect"></div>
      <motion.div
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
            <li>{translate("termOne")}</li>
            <li> {translate("termTwo")}</li>
            <li> {translate("termThree")}</li>
            <li> {translate("termFour")}</li>
          </ol>
          <p className="sub-text">
            {translate("trust")} <br /> {translate("questions")}
          </p>
          <button className="continue">{translate("continue")}</button>
        </div>
      </motion.div>
    </div>
  );
};
export default Terms;
