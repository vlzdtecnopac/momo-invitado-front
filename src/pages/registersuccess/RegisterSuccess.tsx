import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import checkIcon from "../../assets/icons/check.svg";
import { useLanguage } from "../../context/Langi18nContext";

import "./RegisterSuccess.scss";

function RegisterSuccess() {
  const navigate = useNavigate();
  const { translate } = useLanguage();

  useEffect(() => {
    setTimeout(()=>{
      navigate("/categories");
    }, 4000)
  },[])

  return (
    <>
      <div className="success_fully">
        <div className="container">
          <div className="center">
            <img
              className="logo"
              src={logo}
              alt="logo"
            />
            <h2 className={`success`}>{translate("welcome")}</h2>
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
                className="check"
                src={checkIcon}
                alt="check-icon"
              />
            </motion.div>
            <h2 className={`text`}>
              <span className="light-text">{translate("registerText")}</span>
              <br />
              MOMO.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
export default RegisterSuccess;
