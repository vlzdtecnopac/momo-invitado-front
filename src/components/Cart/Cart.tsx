import OrderResumeCard from "../OrderResumeCard/OrderResumeCard";
import { motion } from "framer-motion";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/Langi18nContext";

import "./Cart.scss";

function Cart() {
  const navigate = useNavigate();
  const { translate } = useLanguage();

  const [ejeX, setEjeX] = useState<number>(600);
  const closeHandlerCart = () => {
    setEjeX(600);
  };

  const openHandlerCart = () => {
    setEjeX(0);
  };

  return (
    <>
      <button
        onClick={() => openHandlerCart()}
        className="cart-momo"
      >
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
            <h2 className="order-resume">{translate('summaryOrder')}</h2>
            <button
              onClick={() => closeHandlerCart()}
              className="x"
            ></button>
          </div>
          <div className="product-quantity">{translate('numberProducts', { count: 4 })}</div>
          <div className="container-list-product">
            <OrderResumeCard />
            <hr className="separator" />
            <OrderResumeCard />
            <hr className="separator" />
            <OrderResumeCard />
            <hr className="separator" />
            <OrderResumeCard />
          </div>
        </div>
        <div className="right">
          <div className="subtotal">
            <h3 className="subtotal-tex">{translate('subTotal', { count: 4 })}</h3>
            <p className="subtotal-price">$107.00</p>
          </div>
          <Link to="../checkout">
            <button className="pay">Continuar al pago</button>
          </Link>
        </div>
      </motion.div>
    </>
  );
}
export default Cart;
