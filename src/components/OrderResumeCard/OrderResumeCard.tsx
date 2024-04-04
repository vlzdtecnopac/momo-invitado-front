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
    <>
      <div className="resume_card">
        <div className="left-column">
          <img
            className="product-image"
            src={product}
            alt="Macadamia Black Tea Soda"
            width="89"
            height="93"
          />
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
        </div>
      </div>
      <div className="grid-noGutter-noBottom">
        <div className="col-4">
          <div className="product-quantity">
            <button className="minus" onClick={() => handleQuantityChange(-1)}>
              -
            </button>
            <span className="quantity">{quantity}</span>
            <button className="plus" onClick={() => handleQuantityChange(1)}>
              +
            </button>
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-5">
          <div className="grid-noGutter-noBottom">
            <div className="col-9">
              <p className="subtotal-cart">${(quantity * 67).toFixed(2)} </p>
            </div>
            <div className="col-3"> <button className="trash-cart"></button></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderResumeCard;
