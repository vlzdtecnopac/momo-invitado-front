import Layout from "../../includes/layout/Layout";
import barista from "../../assets/barista.png";
import "./CheckoutPage.scss";
function CheckoutPage() {
  return (
    // <Layout>
    <div>
      <div>
        <div>
          <div>
            <span>
              <img
                alt="Barista"
                src={barista}
              />
            </span>
            <div className="ml-4">
              <h2>Los baristas son las estrellas de nuestro trabajo</h2>
              <button>Agrega tu propina</button>
            </div>
          </div>
          <button>0% Hoy no quiero dejar propina</button>
          <button>5% ¡Un extra para nuestros héroes!</button>
          <button>10% ¡Excelente elección!</button>
          <button>15% ¡Un gesto increíble!</button>
          <input
            placeholder="Otra | Tú decides!"
            type="text"
          />
        </div>
        <div>
          <div>
            <div>
              <h3>Macadamia Black Tea Soda</h3>
              <p>Chico | Regular | Menos azúcar | Sin tapa</p>
            </div>
            <div>
              <div className="flex justify-between">
                <span>Extra de café</span>
                <span>$10</span>
              </div>
              <div className="flex justify-between">
                <span>Extra de café</span>
                <span>$10</span>
              </div>
              <div className="flex justify-between">
                <span>Extra de café</span>
                <span>$10</span>
              </div>
            </div>
            <div>
              <h3>Croissant de almendra</h3>
              <p>Al tiempo</p>
              <div className="flex justify-between">
                <span>Salsa macha</span>
                <span>$10</span>
              </div>
              <div className="items-center flex justify-between">
                <span>$40.00</span>
                <button>x</button>
              </div>
            </div>
          </div>
          <div>
            <button>Agregar cupón</button>
            <div className="flex justify-between mb-2">
              <span>Subtotal (2 productos)</span>
              <span>$50</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Propina</span>
              <span>$50</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Cupón</span>
              <span>$0</span>
            </div>
            <div className="border-b border-dashed border-white mb-4"></div>
            <div className="flex justify-between mb-4">
              <span>Total</span>
              <span>$0.00</span>
            </div>
            <button>Pagar</button>
          </div>
        </div>
      </div>
    </div>
    // </Layout>
  );
}

export default CheckoutPage;
