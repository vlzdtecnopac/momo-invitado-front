import product from "../../assets/product1.jpg";
import "./OrderResumeCard.scss";
function OrderResumeCard() {
  return (
    <div className="grid-2 resume_card">
      <div className="left-column">
        <img
          className="product-image"
          src={product}
          alt="Macadamia Black Tea Soda"
          width="89"
          height="93"
        />
        <div className="product-quantity">
          <button className="minus">-</button>
          <span className="quantity">1</span>
          <button className="plus">+</button>
        </div>
      </div>
      <div className="right-column">
        <h3 className="title">Macadamia Black Tea Soda</h3>
        <div className="details">
          <p>Chico | Regular | Menos azúcar | Sin tapa</p>
          <p className="detail">
            Extra de café <span className="extra-price">$10</span>
          </p>
          <p className="detail">
            Extra de café<span className="extra-price">$10</span>
          </p>
          <p className="detail">
            Extra de café <span className="extra-price">$10</span>
          </p>
        </div>
        <div className="grid-2 end">
          <div className="subtotal">$67.00</div>
          <button className="trash"></button>
        </div>
      </div>
    </div>
  );
}
export default OrderResumeCard;
