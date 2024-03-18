import Layout from "../../includes/layout/Layout";
import barista from "../../assets/barista.png";
import "./CheckoutPage.scss";
import ProductCheckoutCard from "../../components/productCheckoutCard/ProductCheckoutCard";
import Modal from "../../components/Modal/Modal";
function CheckoutPage() {
  return (
    // <Layout>
    <div className="checkout_container grid-3">
      <div className="col-5 tip">
        <div className="grid-2">
          <div className="col-4">
            <img
              alt="Barista"
              src={barista}
            />
          </div>
          <div className="col-7 tip-text">
            <h2>Los baristas son las estrellas de nuestro trabajo</h2>
            <h3>
              <i className="tip-icon"></i>Agrega tu propina
            </h3>
          </div>
        </div>
        <div className="grid-2 tip-options">
          <div className="col">
            {" "}
            <button className="tip-button">
              <span className="percentange">0%</span> Hoy no quiero dejar
              propina
            </button>
            <button className="tip-button">
              <span className="percentange">5%</span> ¡Un extra para nuestros
              héroes!
            </button>
          </div>
          <div className="col-6">
            {" "}
            <button className="tip-button">
              {" "}
              <span className="percentange">10%</span>¡Excelente elección!
            </button>
            <button className="tip-button">
              {" "}
              <span className="percentange">15%</span> ¡Un gesto increíble!
            </button>
          </div>
          <div className="col-12 decide">
            <button className="tip-button">
              <span className="percentange">Otra</span>¡Tú decides!
            </button>
          </div>
        </div>

        <hr />

        <div className="pay-info">
          <div className="form-group">
            <input
              placeholder="Invitado"
              type="text"
              id="name"
              name="name"
              className="client-name"
            />
            <i className="icon-user"></i>
          </div>
          <h2 className="text">Selecciona tu método de pago</h2>
          <div className="pay-method">
            <button className="card">
              <i className="card-icon"></i>Tarjeta
            </button>
            <hr />
            <div className="card-type">
              <button className="type">Credito</button>
              <button className="type">Debito</button>
            </div>
            <hr />
            <button className="cash">
              <i className="cash-icon"></i>Efectivo
            </button>
          </div>
          <button className="cancel">Cancelar</button>
        </div>
      </div>
      <div className="col-3 products">
        <div className="product">
          <ProductCheckoutCard />
        </div>
        <div className="product">
          <ProductCheckoutCard />
        </div>
        <div className="product">
          <ProductCheckoutCard />
        </div>
        <div className="product">
          <ProductCheckoutCard />
        </div>
      </div>
      <div className="col-3 checkout">
        <div className="cupon">
          <input
            placeholder="Invitado"
            type="text"
            id="cupon"
            name="cupon"
            className="cupon-code"
          />
          <button className="add-cupon-btn">Agregar</button>
        </div>
      </div>
      <div className="total grid 2">
        <div className="col-8">
          <h3>Subtotal (4 productos)</h3>
          <h3>Propina</h3>
          <h3>Cupón (MOMO Coffee)</h3>
        </div>
        <div className="col-12">
          <span>$ 50</span>
          <span>$ 50</span>
          <span>$ -20</span>
        </div>
      </div>
      <Modal actionKey={""} />
    </div>
    // </Layout >
  );
}

export default CheckoutPage;

//         <button>Agregar cupón</button>
//         <div className="flex justify-between mb-2">
//           <span>Subtotal (2 productos)</span>
//           <span>$50</span>
//         </div>
//         <div className="flex justify-between mb-2">
//           <span>Propina</span>
//           <span>$50</span>
//         </div>
//         <div className="flex justify-between mb-2">
//           <span>Cupón</span>
//           <span>$0</span>
//         </div>
//         <div className="border-b border-dashed border-white mb-4"></div>
//         <div className="flex justify-between mb-4">
//           <span>Total</span>
//           <span>$0.00</span>
//         </div>
//         <button>Pagar</button>
//       </div>
//     </div>
//   </div>
// </div>;
