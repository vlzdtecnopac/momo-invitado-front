import Layout from "../../includes/layout/Layout";
import barista from "../../assets/barista.png";
import "./CheckoutPage.scss";
function CheckoutPage() {
  return (
    // <Layout>
    <div className="checkout_container grid-3">
      <div className="col-6 tip">
        <div className="grid-2">
          <div className="col-4">
            <img
              alt="Barista"
              src={barista}
            />
          </div>
          <div className="col-8 tip-text">
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
          <div className="col">
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
      </div>
      <div className="col-3">Hola</div>
      <div className="col-3">Mundo</div>
    </div>
    // </Layout>
  );
}

export default CheckoutPage;

{
  /* 
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
</div>; */
}
