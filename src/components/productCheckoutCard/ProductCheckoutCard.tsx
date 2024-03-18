import product from "../../assets/product1.jpg";
import "./ProductCheckoutCard.scss";
function ProductCheckoutCard() {
  return (
    <div className="grid-2 checkout_card">
      <div className="left-column col-4">
        <img
          className="product-image"
          src={product}
          alt="Macadamia Black Tea Soda"
          width="89"
          height="93"
        />
        <div className="product-quantity">x2</div>
      </div>
      <div className="right-column col-8">
        <h3 className="title">Macadamia Black Tea Soda</h3>
        <ul className="details">
          <li>Chico | Regular | Menos azúcar | Sin tapa</li>
          <li className="detail">
            Extra de café <span className="extra-price">$10</span>
          </li>
          <li className="detail">
            Extra de café<span className="extra-price">$10</span>
          </li>
          <li className="detail">
            Extra de café <span className="extra-price">$10</span>
          </li>
        </ul>
        <div className="end">
          <div className="subtotal">$134.00</div>
        </div>
      </div>
    </div>
  );
}
export default ProductCheckoutCard;
