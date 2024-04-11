import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLiveQuery } from "dexie-react-hooks";

import { useLanguage } from "../../../context/Langi18nContext";
import { useShoppingStore } from "../../../store/shopping.store";
import { db } from "../../../helpers/dexie_db.helper";
import coffee from "/assets/coffee-momo.png";
import "./PercentageTip.scss";

const PercentageTip: React.FC<{onHandleCancel: Function}> = ({onHandleCancel}) => {
  const { translate } = useLanguage();
  const { setStoreTip } = useShoppingStore();
  const productCart = useLiveQuery(() =>
  db.product.orderBy("name_product").toArray()
);
  const [getPropina, setPropina] = useState<number>(0);

  const handlePorcentSelect = (event:  React.ChangeEvent<HTMLInputElement> ) => {
    const subtotalCart = productCart?.reduce(
      (total, item) => item.subtotal + total,
      0
    );
    const propinaActual = (Number(event.target.value) * subtotalCart!) / 100;
    setPropina(propinaActual);
  }

  function onHandleSubmit(){
    setStoreTip({
      tip: getPropina,
      selectTip: 0
    });
    onHandleCancel()
  }


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
          <h2 className="text">{translate("percentageAmount")}</h2>
          <input
            onChange={(e)=>handlePorcentSelect(e)}
            className="write"
            type="number"
            placeholder={translate("writeHere")}
          />
          <div className="btns">
            <button onClick={()=>onHandleCancel()} className="cancel">{translate("cancel")}</button>
            <button onClick={()=>onHandleSubmit()} className="add-tip">{translate("addTip")}</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default PercentageTip;
