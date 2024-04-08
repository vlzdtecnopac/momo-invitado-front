import { useState } from "react";
import "./OrderResumeCard.scss";
import { db } from "../../helpers/dexie_db.helper";

interface OrderResumeCardProp {
    data: any;
}

const OrderResumeCard: React.FC<OrderResumeCardProp> = ({data}) => {
  const [quantity, setQuantity] = useState(1); 

  const handleQuantityChange = (change: any) => {
    const newQuantity = Math.max(quantity + change, 1); 
    setQuantity(newQuantity);
  };

  const handleDeleteProduct = (id: string) => {
    db.product.delete(id)
  }

  return (
    <>
      <div className="resume_card">
        <div className="left-column">
          <img
            className="product-image"
            src={data.image}
            alt={data.name_product}
            width="89"
            height="93"
          />
        </div>
        <div className="right-column">
          <h3 className="title">{data.name_product}</h3>
          <div className="details">
            <p>Chico | Regular | Menos azúcar | Sin tapa</p>
            <ul className="detail">
              <li>
                Extra de café <span className="extra-price">$10</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid-noGutter-noBottom gray-line">
        <div className="col-4">
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
        <div className="col-2"></div>
        <div className="col-5">
          <div className="grid-noGutter-noBottom">
            <div className="col-9">
              <p className="subtotal-cart">${(quantity * data.price).toFixed(2)} </p>
            </div>
            <div className="col-3">
              <button onClick={()=>handleDeleteProduct(data.id)} className="trash-cart"></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderResumeCard;
