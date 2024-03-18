import barista from "../../assets/barista.png";
import ProductCheckoutCard from "../../components/productCheckoutCard/ProductCheckoutCard";
import Modal from "../../components/Modal/Modal";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import Layout from "../../includes/layout/Layout";
import "./CheckoutPage.scss";

function CheckoutPage() {
  return (<>
  <Layout>
    <CategoryNav/>
    <div className="checkout_container grid-3">
      <div className="col-5">
        <section className="tip">
          <div className="grid-2">
            <div className="col-5">
              <img alt="Barista" src={barista} />
            </div>
            <div className="col-7 tip-text">
              <h2>Los baristas son las estrellas de nuestro trabajo</h2>
              <div className="tip-subtext">
                <i className="tip-icon"></i> <span>Agrega tu propina</span>
              </div>
            </div>
          </div>
          <div className="grid-2 tip-options">
            <div className="col">
              <button className="tip-button">
                <div className="percentange">0%</div>
                <div className="middle">Hoy no quiero dejar propina</div>
                <div>
                  <i className="dolar-icon"></i>
                </div>
              </button>
              <button className="tip-button">
                <div className="percentange">5%</div>
                <div className="middle">¡Un extra para nuestros héroes!</div>
                <div>
                  <i className="dolar-icon"></i>
                </div>
              </button>
            </div>
            <div className="col-6">
              <button className="tip-button">
                <div className="percentange">10%</div>
                <div className="middle">¡Excelente elección!</div>
                <div>
                  <i className="dolar-icon"></i>
                </div>
              </button>
              <button className="tip-button">
                <div className="percentange">15%</div>
                <div className="middle">¡Un gesto increíble!</div>
                <div>
                  <i className="dolar-icon"></i>
                </div>
              </button>
            </div>
            <div className="col-12 decide">
              <button className="tip-button">
                <div className="percentange">Otra</div>
                <div className="middle">¡Tú decides!</div>
                <div>
                  <i className="dolar-icon"></i>
                </div>
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
        </section>
      </div>
      <div className="col-4">
        <section className="products">
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
        </section>
      </div>
      <div className="col-3 ">
        <section className="checkout">
          <div className="cupon">
            <div className="form-group">
              <input
                placeholder="Invitado"
                type="text"
                id="cupon"
                name="cupon"
                className="cupon-code"
              />
              <i className="cupon-icon"></i>
            </div>
            <button className="add-cupon-btn">Agregar</button>
          </div>
          <div></div>
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
        </section>
      </div>

      {/*<Modal actionKey={""} />*/}
    </div>
    </Layout>
    </>
  );
}

export default CheckoutPage;
