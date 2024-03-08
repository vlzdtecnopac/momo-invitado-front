import { color, motion } from "framer-motion";
import isotipo from "/src/assets/icons/isotipo.svg";
import mxIcon from "/src/assets/icons/mexico_flag.svg";
import usaIcon from "/src/assets/icons/usa_flag.svg";
import logo from "/src/assets/icons/logo.svg";
import noCashIcon from "/src/assets/icons/no_cash.svg";

import "./OrderHerePage.scss";
import { useState } from "react";

function OrderHerePage() {
  const numberInit = 1;
  const stateInitBackground = { color1: "#EDEBDF", color2: "#D5EAFB" };
  const stateButtonActive = { color: "#2E418E", text: "#EDEBDF" };

  const [keyAnimation, setKeyAnimation] = useState<number>(numberInit);

  const [colorState, setColorState] = useState(stateInitBackground);
  const [colorButtonActive, setColorButtonActive] = useState(stateButtonActive);

  const handleAnimationStart = () => {
    console.log("La transición ha comenzado");
    if (keyAnimation == 1) {
      //Btn Active
      setColorButtonActive(stateButtonActive);
    } else if (keyAnimation == 2) {
       //Btn Active
       setColorButtonActive(stateButtonActive);
     
    } else if (keyAnimation == 3) {
       //Btn Active
       setColorButtonActive({ color: "#EDEBDF", text: "#2E418E" });
     
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
      setColorState({ color1: "#2E418E", color2: "#EDEBDF" });

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
        key={keyAnimation}
        className="order_here_page"
        onAnimationStart={handleAnimationStart}
        onAnimationComplete={handleAnimationComplete}
        animate={{ backgroundColor: [colorState.color1, colorState.color2] }}
        transition={{
          delay: 5,
          duration: 10,
          repeat: 0,
        }}
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <div className="imagotipo">
          <img className="isotipo" src={isotipo} alt="isotipo" />
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="btn-container">
          <button className="btn">
            <h2>Ordena aquí</h2>
          </button>
        </div>
        <div className="btns">
          <div className="right">
            <motion.button
              key={keyAnimation}
              style={{ backgroundColor: colorButtonActive.color }}
              className="lang"
            >
              <img src={mxIcon} className="es-icon"></img>
              <span  style={{ color: colorButtonActive.text }} className="es">Español</span>
            </motion.button>
            <div className="lang">
              <img src={usaIcon} className="en-icon"></img>
              <span className="en">Ingles</span>
            </div>
          </div>
          <div className="left">
            <div className="no-cash">
              <img className="icon" src={noCashIcon} alt="no-cash" />
              <span className="text">
                No aceptamos efectivo. <br /> Descubre por qué
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
export default OrderHerePage;
