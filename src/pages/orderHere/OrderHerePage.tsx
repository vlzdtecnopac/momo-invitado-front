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
  const stateInit = { color1: "#EDEBDF", color2: "#D5EAFB" };
  const [keyAnimation, setKeyAnimation] = useState<number>(numberInit);

  const [colorState, setColorState] = useState(stateInit);

  const handleAnimationStart = () => {
    console.log("La transición ha comenzado");

    if (keyAnimation == 1) {
      console.log("Aqui Layout 1");
    } else if (keyAnimation == 1) {
      console.log("Aqui Layout 2");
    } else if (keyAnimation == 3) {
      console.log("Aqui Layout 3");
    }
  };

  const handleAnimationComplete = () => {
    console.log("La transición ha terminado");
    if (keyAnimation == 1) {
      setColorState({ color1: "#D5EAFB", color2: "#2E418E" });
      setKeyAnimation(2);
    } else if (keyAnimation == 2) {
      setColorState({ color1: "#2E418E", color2: "#EDEBDF" });
      setKeyAnimation(3);
    } else if (keyAnimation == 3) {
      setColorState(stateInit);
      setKeyAnimation(numberInit);
    }
  };

  return (
    <>
      <motion.div
        key={keyAnimation}
        onAnimationStart={handleAnimationStart}
        onAnimationComplete={handleAnimationComplete}
        animate={{ backgroundColor: [colorState.color1, colorState.color2] }}
        transition={{
          delay: 20,
          duration: 10,
          repeat: 0,
        }}
        style={{
          width: "100vw",
          height: "100vh",
          // Add other styles as needed
        }}
      >
        {/* Your component content */}
      </motion.div>
      <div className="order_here_page">
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
            <div className="lang">
              <img src={mxIcon} className="es-icon"></img>
              <span className="es">Español</span>
            </div>
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
      </div>
    </>
  );
}
export default OrderHerePage;
