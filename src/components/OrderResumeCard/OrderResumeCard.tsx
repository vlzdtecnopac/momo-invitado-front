import { useState } from "react";
import product from "../../assets/product1.jpg";
import "./OrderResumeCard.scss";

function OrderResumeCard() {
  const [quantity, setQuantity] = useState(1); // Initial quantity state

  const handleQuantityChange = (change: any) => {
    const newQuantity = Math.max(quantity + change, 1); // Ensure minimum quantity is 1
    setQuantity(newQuantity);
  };

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
          <button
            className="minus"
            onClick={() => handleQuantityChange(-1)}
          >
            -
          </button>
          <span className="quantity">{quantity}</span>
          <button
            className="plus"
            onClick={() => handleQuantityChange(1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="right-column">
        <h3 className="title">Macadamia Black Tea Soda</h3>
        <div className="details">
          <p>Chico | Regular | Menos azúcar | Sin tapa</p>
          <p className="detail">
            Extra de café <span className="extra-price">$10</span>
          </p>
          {/* ... other details */}
        </div>
        <div className="grid-2 end">
          <div className="subtotal">
            ${(quantity * 67).toFixed(2)}{" "}
            {/* Update subtotal based on quantity */}
          </div>
          <button className="trash"></button>
        </div>
      </div>
    </div>
  );
}

export default OrderResumeCard;
