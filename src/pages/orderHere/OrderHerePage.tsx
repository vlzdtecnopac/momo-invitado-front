import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import isotipo from "/src/assets/icons/isotipo.svg";
import mxIcon from "/src/assets/icons/mexico_flag.svg";
import usaIcon from "/src/assets/icons/usa_flag.svg";
import LogoMomo from "../../components/Logo/LogoMomo";
import NoCash from "../../components/NoCash/NoCash";

import LayoutBlank from "../../includes/layout/LayoutBlank";
import { useLanguage } from "../../context/Langi18nContext";
import "./OrderHerePage.scss";

function OrderHerePage() {
  const navigate = useNavigate();
  const { translate, setLanguage, language } = useLanguage();

  const numberInit = 1;
  const stateInitBackground = { color1: "#EDEBDF", color2: "#D5EAFB" };
  const stateButtonActive = { color: "#2E418E", text: "#EDEBDF" };
  const stateButtonInactive = {
    color: "transparent",
    border: "solid 1.5px #2E418E",
    text: "#2E418E",
  };
  const stateNoCashBackground = { color: "#2E418E", text: "#EDEBDF" };

  const stateButtonOrder = { color: "#FF6010" };
  const [keyAnimation, setKeyAnimation] = useState<number>(numberInit);
  const [colorState, setColorState] = useState(stateInitBackground);
  const [colorButtonActive, setColorButtonActive] = useState(stateButtonActive);
  const [colorButtonNoCash, setColorButtonNoCash] = useState(
    stateNoCashBackground
  );
  const [colorButtonInactive, setColorButtonInactive] =
    useState(stateButtonInactive);
  const [orderColorState, setOrderColorState] = useState(stateButtonOrder);

  const handleAnimationStart = () => {
    console.log("La transición ha comenzado");
    if (keyAnimation == 1) {
      //Btn Active
      setColorButtonActive(stateButtonActive);
      setOrderColorState(stateButtonOrder);
      setColorButtonInactive(stateButtonInactive);
      setColorButtonNoCash(stateNoCashBackground);
    } else if (keyAnimation == 2) {
      //Btn Active
      setColorButtonActive(stateButtonActive);
      setOrderColorState({ color: "#2E418E" });
      setColorButtonInactive(stateButtonInactive);
      setColorButtonNoCash(stateNoCashBackground);
    } else if (keyAnimation == 3) {
      //Btn Active
      setColorButtonActive({ color: "#EDEBDF", text: "#2E418E" });
      setOrderColorState(stateButtonOrder);
      setColorButtonInactive({
        color: "transparent",
        border: "solid 1.5px #EDEBDF",
        text: "#EDEBDF",
      });
      setColorButtonNoCash({ color: "#EDEBDF", text: "#2E418E" });
    }
  };

  const handleAnimationComplete = () => {
    console.log("La transición ha terminado");
    if (keyAnimation == 1) {
      //Background
      setColorState({ color1: "#D5EAFB", color2: "#2E418E" });
      //State Key
      setKeyAnimation(2);
    } else if (keyAnimation == 2) {
      //Background
      setColorState({ color1: "#2e418e", color2: "#EDEBDF" });

      //State Key
      setKeyAnimation(3);
    } else if (keyAnimation == 3) {
      //Background
      setColorState(stateInitBackground);
      //State Key
      setKeyAnimation(numberInit);
    }
  };

  const HandlePageInit = () => {
    navigate("/categories");
  };

  const HandleNotCash = () => {
    navigate("/no-cash");
  };

  return (
    <LayoutBlank>
      <motion.div
        key={`frame-1_${keyAnimation}`}
        className="order_here_page"
        onAnimationStart={handleAnimationStart}
        onAnimationComplete={handleAnimationComplete}
        animate={{ backgroundColor: [colorState.color1, colorState.color2] }}
        transition={{
          delay: 8,
          duration: 4,
          repeat: 0,
        }}
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <div className="imagotipo">
          <motion.div
            className="logo"
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
            <img className="isotipo" src={isotipo} alt="isotipo" />
            <LogoMomo color={colorButtonNoCash.color} />
          </motion.div>
        </div>
        <div className="btn-container">
          <motion.button
            key={`frame-2_${keyAnimation}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              backgroundColor: orderColorState.color,
            }}
            transition={{
              duration: 1,
              ease: [0, 0.71, 0.2, 1.01],
              repeat: 0,
            }}
            className="btn"
            onClick={() => HandlePageInit()}
          >
            <h2>{translate("orderHere")}</h2>
          </motion.button>
        </div>
        <div className="btns">
          <div className="right">
            <motion.button
              key={`frame-3_${keyAnimation}`}
              style={{
                backgroundColor:
                  language == "es"
                    ? colorButtonActive.color
                    : colorButtonInactive.color,
                border: language == "es" ? colorButtonInactive.border : "",
              }}
              transition={{
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
                repeat: 0,
              }}
              onClick={() => setLanguage("es")}
              className="lang"
            >
              <img src={mxIcon} className="es-icon"></img>
              <span
                style={{
                  color:
                    language == "es"
                      ? colorButtonActive.text
                      : colorButtonInactive.text,
                }}
                className="es"
              >
                Español
              </span>
            </motion.button>
            <motion.button
              key={`frame-4_${keyAnimation}`}
              style={{
                backgroundColor:
                  language == "en"
                    ? colorButtonActive.color
                    : colorButtonInactive.color,
                border: language == "en" ? colorButtonInactive.border : "",
              }}
              transition={{
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
                repeat: 0,
              }}
              onClick={() => setLanguage("en")}
              className="lang"
            >
              <img src={usaIcon} className="en-icon"></img>
              <span
                style={{
                  color:
                    language == "en"
                      ? colorButtonActive.text
                      : colorButtonInactive.text,
                }}
                className="en"
              >
                English
              </span>
            </motion.button>
          </div>
          <div className="left">
            <motion.div
              key={`frame-5_${keyAnimation}`}
              style={{
                backgroundColor: colorButtonNoCash.color,
              }}
              transition={{
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
                repeat: 0,
              }}
              onClick={() => HandleNotCash()}
              className="no-cash"
            >
              <NoCash color={colorState.color1} />
              <span
                style={{
                  color: colorButtonNoCash.text,
                }}
                className="text"
              >
                {translate("notAcceptEffecty")}
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </LayoutBlank>
  );
}
export default OrderHerePage;
