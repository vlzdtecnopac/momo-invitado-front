import "./ProductCheckoutCard.scss";

interface OrderResumeCardProp {
  data: any;
}

const ProductCheckoutCard: React.FC<OrderResumeCardProp> = ({ data }) => {
  const getExtraOptions = () => {
    if (data.extra) {
      try {
        const extraOptions = JSON.parse(data.extra);
        return (
          <p className="sub-parrafo">
            {Object.keys(extraOptions.temperature).length > 0
              ? `${extraOptions.temperature.name} | `
              : ""}
            {Object.keys(extraOptions.size).length > 0
              ? `${extraOptions.size.name} | `
              : ""}
            {Object.keys(extraOptions.sugar).length > 0
              ? `${extraOptions.sugar.name} | `
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
          <table className="details">
            <tbody>
              {Object.keys(extraOptions.lid).length > 0 &&
                extraOptions.lid.map((item: any, i: number) => {
                  return (
                    <tr key={i}>
                      <td
                        style={{
                          width: "190px",
                          margin: "4px 0px",
                          display: "block",
                        }}
                      >
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
                    <td className="extra-price">$ {item.price}</td>
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
    <div className="grid-2 checkout_card">
      <div className="left-column col-4">
        <img
          className="product-image"
          src={data.image}
          alt="Macadamia Black Tea Soda"
          width="89"
          height="93"
        />
        <div className="product-quantity">{`X${data.quanty}`}</div>
      </div>
      <div className="right-column col-8">
        <h3 className="title">{data.name_product}</h3>
        {getExtraOptions()}
        {getListExtraOptions()}
        <div className="end">
          <div className="subtotal"> ${data.price.toFixed(2)} </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCheckoutCard;
