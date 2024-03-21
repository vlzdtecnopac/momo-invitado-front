import OrderResumeCard from "../OrderResumeCard/OrderResumeCard";
import { motion } from "framer-motion";
import "./Cart.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
function Cart() {
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
        <span>Ver Carrito</span> <i className="icon-cart"></i>
      </button>
      <motion.div
        className="cart"
        initial={{ x: 600 }}
        animate={{ x: ejeX }}
        transition={{ duration: 1 }}
      >
        <div className="left">
          <div className="resume">
            <h2 className="order-resume">Resumen de tu pedido</h2>
            <button
              onClick={() => closeHandlerCart()}
              className="x"
            ></button>
          </div>
          <div className="product-quantity">2 productos</div>
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
            <h3 className="subtotal-tex">Subtotal (2 productos)</h3>
            <div className="subtotal-price">$107.00</div>
          </div>
          <Link to="../checkout">
            {" "}
            <button className="pay">Continuar al pago</button>
          </Link>
        </div>
      </motion.div>
    </>
  );
}
export default Cart;
