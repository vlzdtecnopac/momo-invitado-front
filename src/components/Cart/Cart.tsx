import OrderResumeCard from "../OrderResumeCard/OrderResumeCard";
import { motion } from "framer-motion";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../helpers/dexie_db.helper";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/Langi18nContext";

import "./Cart.scss";

function Cart() {
  const navigate = useNavigate();
  const [getCount, setCount] = useState(0);
  const productCart = useLiveQuery(() => db.product.toArray());
  const { translate } = useLanguage();

  const [ejeX, setEjeX] = useState<number>(600);
  const closeHandlerCart = () => {
    setEjeX(600);
  };

  useEffect(()=> {
    countCart();
  },[productCart])

  const openHandlerCart = () => {
    setEjeX(0);
  };

  const countCart = async() =>
    db.product.count().then(function(count) {
      setCount(count);
  }).catch(function(error) {
      setCount(0);
      console.error('Error:', error);
  });
  

  return (
    <>
      <button onClick={() => openHandlerCart()} className="cart-momo">
        <span>{translate("showCart")}</span> <i className="icon-cart"></i>
      </button>
      <motion.div
        className="cart"
        initial={{ x: 600 }}
        animate={{ x: ejeX }}
        transition={{ duration: 1 }}
      >
        <div className="left">
          <div className="resume">
            <div>
              <h2 className="order-resume">{translate("summaryOrder")}</h2>
              <p className="product-quantity">
                {translate("numberProducts", { count: getCount })}
              </p>
            </div>
            <button onClick={() => closeHandlerCart()} className="x"></button>
          </div>

          <div className="container-list-product">
            {productCart?.map((item) => (
              <OrderResumeCard data={item}/>
            ))}
          </div>
        </div>
        <div className="right">
          <div className="subtotal">
            <h3 className="subtotal-tex">
              {translate("subTotal", { count: getCount })}
            </h3>
            <p className="subtotal-price">$107.00</p>
          </div>
          <button onClick={() => navigate("/checkout")} className="pay">
            {translate("countinuePayment")}
          </button>
        </div>
      </motion.div>
    </>
  );
}
export default Cart;
