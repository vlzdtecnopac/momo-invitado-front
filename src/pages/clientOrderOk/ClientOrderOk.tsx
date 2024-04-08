import { motion } from "framer-motion";

import logo from "/assets/icons/logo.svg";
import clock from "/assets/icons/clock.svg";
import { useLanguage } from "../../context/Langi18nContext";

import "./ClientOrderOk.scss";

function ClientOrderOk() {
  const { translate } = useLanguage();

  return (
    <div className="success_fully">
      <div className="container">
        <div className="center">
          <img
            className="logo"
            src={logo}
            alt="logo"
          />
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
              src={clock}
              alt="check-icon"
            />
          </motion.div>
          <h2 className={`name`}>Michael Gonzalez</h2>

          <p className="text">{translate("orderClientOk")}</p>
          <div className="btns">
            <button className="shop">{translate("continueShopping")}</button>
            <button className="exit">{translate("exit")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientOrderOk;
