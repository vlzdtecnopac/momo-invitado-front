import OrderResumeCard from "../OrderResumeCard/OrderResumeCard";
import { motion } from "framer-motion";
import "./Cart.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/Langi18nContext";
function Cart() {
  const navigate =  useNavigate();
  const { translate } = useLanguage();

  const  [ejeX, setEjeX] = useState<number>(600);
  const closeHandlerCart = () =>{
      setEjeX(600);
  }

  const openHandlerCart = ( ) => {
    setEjeX(0);
  }

  return (
    <>
      <button onClick={()=>openHandlerCart()} className="cart-momo">
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
            <h2 className="order-resume">Resumen de tu pedido</h2>
            <button onClick={()=>closeHandlerCart()} className="x"></button>
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
            <p className="subtotal-price">$107.00</p>
          </div>
          <button onClick={()=> navigate("/checkout")} className="pay">Continuar al pago</button>
        </div>
      </motion.div>
    </>
  );
}
export default Cart;
