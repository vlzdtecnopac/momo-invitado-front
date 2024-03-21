import OrderResumeCard from "../OrderResumeCard/OrderResumeCard";
import "./Cart.scss";
function Cart() {
  return (<>
    <button className="cart-momo"><span>Ver Carrito</span> <i className="icon-cart"></i></button>
    <div className="cart">
      <div className="left">
        <div className="resume">
          <h2 className="order-resume">Resumen de tu pedido</h2>
          <button className="x"></button>
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
        <button className="pay">Continuar al pago</button>
      </div>
  </div>
    </>
  );
}
export default Cart;
