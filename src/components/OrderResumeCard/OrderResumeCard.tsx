import { useState } from "react";
import "./OrderResumeCard.scss";
import { db } from "../../helpers/dexie_db.helper";

interface OrderResumeCardProp {
  data: any;
}

const OrderResumeCard: React.FC<OrderResumeCardProp> = ({ data }) => {
  const [quantity, setQuantity] = useState(data.quanty);

  const handleQuantityChange = async (id: string, change: number) => {
    let quantyProduct = quantity + change;
    if (quantyProduct == 0) return;
    const newQuantity = Math.max(quantyProduct, 1);
    try {
      await db.product.update(id, { quanty: quantyProduct, subtotal: newQuantity * data.price });
      setQuantity(newQuantity);
    } catch (error) {
      console.error("Error al actualizar el registro:", error);
    }
  };

  const handleDeleteProduct = (id: string) => {
    db.product.delete(id);
    setQuantity(0);
  };

  const getExtraOptions = () => {
    if (data.extra) {
      try {
        const extraOptions = JSON.parse(data.extra);
        console.log(extraOptions);
        return (
          <p>
            {Object.keys(extraOptions.temperature).length > 0
              ? `${extraOptions.temperature.name} | `
              : ""}
            {Object.keys(extraOptions.size).length > 0
              ? `${extraOptions.size.name} | `
              : ""}
            {Object.keys(extraOptions.sugar).length > 0
              ? `${extraOptions.sugar.name} | `
              : ""}
            {Object.keys(extraOptions.coffee_type).length > 0
              ? `${extraOptions.coffee_type.name} | `
              : ""}
            {Object.keys(extraOptions.milk).length > 0
              ? `${extraOptions.milk.name} | `
              : ""}
            {Object.keys(extraOptions.color).length > 0
              ? `${extraOptions.color[0].name} | `
              : ""}
          </p>
        );
      } catch (error) {
        console.error("Error al analizar la cadena JSON:", error);
        return null;
      }
    }
    return null;
  };

  const getListExtraOptions = () => {
    if (data.extra) {
      try {
        const extraOptions = JSON.parse(data.extra);
        return (
          <table className="detail">
            <tbody>
              {Object.keys(extraOptions.lid).length > 0 &&
                extraOptions.lid.map((item: any, i: number) => {
                  return (
                    <tr key={i}>
                      <td style={{ width: "190px" }}>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: item.name,
                          }}
                        />
                      </td>
                      <td style={{ width: "35px" }}>
                        <span className="extra-price">$ {item.price}</span>
                      </td>
                    </tr>
                  );
                })}

              {Object.keys(extraOptions.extra_coffee).length > 0 &&
                extraOptions.extra_coffee.map((item: any, i: number) => (
                  <tr key={i}>
                    <td style={{ width: "190px" }}>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: item.name,
                        }}
                      />
                    </td>
                    <td style={{ width: "35px" }}>
                      <span className="extra-price">$ {item.price}</span>
                    </td>
                  </tr>
                ))}

              {Object.keys(extraOptions.sauce).length > 0 &&
                extraOptions.sauce.map((item: any, i: number) => (
                  <tr key={i}>
                    <td style={{ width: "190px" }}>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: item.name,
                        }}
                      />
                    </td>
                    <td style={{ width: "35px" }}>
                      <span className="extra-price">$ {item.price}</span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        );
      } catch (error) {
        console.error("Error al analizar la cadena JSON:", error);
        return null;
      }
    }
    return null;
  };

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
            {getExtraOptions()}
            {getListExtraOptions()}
          </div>
        </div>
      </div>
      <div className="grid-noGutter-noBottom grid-middle gray-line">
        <div className="col-4">
          <div className="product-quantity">
            <button
              className="minus"
              onClick={() => handleQuantityChange(data.id, -1)}
            >
              -
            </button>
            <span className="quantity">{quantity}</span>
            <button
              className="plus"
              onClick={() => handleQuantityChange(data.id, 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-5">
          <div className="grid-noGutter-noBottom">
            <div className="col-9">
              <p className="subtotal-cart">
                ${(quantity * data.price).toFixed(2)}{" "}
              </p>
            </div>
            <div className="col-3">
              <button
                onClick={() => handleDeleteProduct(data.id)}
                className="trash-cart"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderResumeCard;
