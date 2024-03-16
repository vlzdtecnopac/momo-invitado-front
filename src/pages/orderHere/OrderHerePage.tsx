import { useState } from "react";
import { motion } from "framer-motion";
import isotipo from "/src/assets/icons/isotipo.svg";
import mxIcon from "/src/assets/icons/mexico_flag.svg";
import usaIcon from "/src/assets/icons/usa_flag.svg";
import LogoMomo from "../../components/Logo/LogoMomo";
import NoCash from "../../components/NoCash/NoCash";
import { Link } from "react-router-dom";
import "./OrderHerePage.scss";

function OrderHerePage() {
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

  return (
    <>
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
          <Link to="/categories">
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
            >
              <h2>Ordena aquí</h2>
            </motion.button>
          </Link>
        </div>
        <div className="btns">
          <div className="right">
            <motion.button
              key={`frame-3_${keyAnimation}`}
              style={{ backgroundColor: colorButtonActive.color }}
              transition={{
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
                repeat: 0,
              }}
              className="lang"
            >
              <img src={mxIcon} className="es-icon"></img>
              <p style={{ color: colorButtonActive.text }} className="es">
                Español
              </p>
            </motion.button>
            <motion.button
              key={`frame-4_${keyAnimation}`}
              style={{
                backgroundColor: colorButtonInactive.color,
                border: colorButtonInactive.border,
              }}
              transition={{
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
                repeat: 0,
              }}
              className="lang"
            >
              <img src={usaIcon} className="en-icon"></img>
              <span style={{ color: colorButtonInactive.text }} className="en">
                English
              </span>
            </motion.button>
          </div>
          <div className="left">
            <Link to="/no-cash">
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
                className="no-cash"
              >
                <NoCash color={colorState.color1} />
                <span
                  style={{
                    color: colorButtonNoCash.text,
                  }}
                  className="text"
                >
                  No aceptamos efectivo. <br /> Descubre por qué
                </span>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
export default OrderHerePage;
