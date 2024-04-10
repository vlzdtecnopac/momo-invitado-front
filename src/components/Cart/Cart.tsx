import OrderResumeCard from "../OrderResumeCard/OrderResumeCard";
import { useLocation } from "react-router-dom";

import { motion } from "framer-motion";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../helpers/dexie_db.helper";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/Langi18nContext";

import "./Cart.scss";
import { useShoppingStore } from "../../store/shopping.store";

function Cart() {
  const { cart } = useShoppingStore();
  const navigate = useNavigate();
  const location = useLocation();
  const productCart = useLiveQuery(() =>
    db.product.orderBy("name_product").toArray()
  );
  const { translate } = useLanguage();

  const [ejeX, setEjeX] = useState<number>(600);
  const closeHandlerCart = () => {
    setEjeX(600);
  };

  const openHandlerCart = () => {
    setEjeX(0);
  };

  function countCart() {
    console.log(cart);
    return productCart?.reduce((total, item) => total + item.quanty, 0);
  }

  return (
    <>
      {location.pathname != "/checkout" && cart ? (
        <button onClick={() => openHandlerCart()} className="cart-momo">
          <span>{translate("showCart")}</span> <i className="icon-cart"></i>
        </button>
      ) : null}
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
                {translate("numberProducts", { count: countCart() })}
              </p>
            </div>
            <button onClick={() => closeHandlerCart()} className="x"></button>
          </div>
          <div className="container-list-product">
            {productCart?.map((item) => (
              <div key={item.id}>
                <OrderResumeCard data={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="right">
          <div className="subtotal">
            <h3 className="subtotal-tex">
              {translate("subTotal", { count: countCart() })}
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
