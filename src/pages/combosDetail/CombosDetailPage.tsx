import ProductCardDetail from "../../components/ProductCardDetail/ProductCardDetail";
import product from "../../assets/product1.jpg";
import glass from "../../assets/icons/glass.svg";
import milk from "../../assets/icons/bottle.svg";
import sugar from "../../assets/icons/sugar.svg";
import extra from "../../assets/icons/extra.svg";
import lid from "../../assets/icons/lid.svg";
import recicle from "../../assets/icons/recicle.svg";
import Layout from "../../includes/layout/Layout";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import sauce from "../../assets/icons/sauce.svg";
import temperature from "../../assets/icons/temperature.svg";
import "./CombosDetailPage.scss";

function CombosDetailPage() {
  return (
    <Layout>
      <CategoryNav />
      <div className="page-container">
        <div className="combos_detail">
          <div className="grid-2">
            <div className="col-3 img-col">
              <ProductCardDetail
                img={product}
                name="Macadamia Black Tea Soda"
                description="Bebida de chocolate con macadamia"
              />
            </div>
            <div className="col-9 details-col detail-card">
              <div className="details">
                <h2 className="step">Paso 1: Configura tu bebida </h2>
                <hr className="separator" />

                <div className="size">
                  <div className=" size-container container">
                    <img
                      className="icon"
                      src={glass}
                      alt="size"
                    />
                    <h3 className="text">Tamaño</h3>
                  </div>

                  <div className="options">
                    <button className="option">Chico 12 Oz</button>
                    <button className="option">
                      Grande 16 Oz <span className="extra-price">$10</span>
                    </button>
                  </div>
                </div>
                <hr className="separator" />
                <div className="milk">
                  <div className="container">
                    <img
                      className="icon"
                      src={milk}
                      alt="milk"
                    />
                    <h3 className="text">Leche</h3>
                  </div>

                  <div className="options">
                    <button className="option">Entera</button>
                    <button className="option">
                      Deslactosada <span className="extra-price">$5</span>
                    </button>
                    <button className="option">
                      Avena <br /> <span className="extra-price">$9</span>
                    </button>
                  </div>
                </div>
                <hr className="separator" />
                <div className="milk">
                  <div className="container">
                    <img
                      className="icon"
                      src={sugar}
                      alt="sugar"
                    />
                    <h3 className="text">Azucar</h3>
                  </div>

                  <div className="options">
                    <button className="option">Menos</button>
                    <button className="option">Original</button>
                    <button className="option">Más</button>
                  </div>
                </div>
                <hr className="separator" />
                <div className="extra">
                  <img
                    className="icon"
                    src={extra}
                    alt="extra"
                  />
                  <div className="container">
                    <div className="block">
                      <h3 className="text">Extra shot de café</h3>
                      <h3 className="text">Extra de crema</h3>
                    </div>
                  </div>

                  <div className="extra-options">
                    <span className="extra">
                      10$
                      <input
                        className="checkbox"
                        name="10"
                        type="checkbox"
                      />
                    </span>
                    <span className="extra">
                      20$
                      <input
                        name="20"
                        className="checkbox"
                        type="checkbox"
                      />
                    </span>
                  </div>
                </div>
                <hr className="separator" />
                <div className="extra">
                  <img
                    className="icon"
                    src={lid}
                    alt="lid"
                  />
                  <div className="container">
                    <div className="block">
                      <h3 className="text">Con tapa</h3>
                      <h3 className="text">
                        Sin tapa{" "}
                        <span className="recicle">
                          <img
                            className="recicle-icon"
                            src={recicle}
                            alt="recicle-icon"
                          />
                        </span>
                        <span className="recicle-text">
                          Ayúdanos a cuidar el planeta
                        </span>
                      </h3>{" "}
                    </div>
                  </div>
                  <div className="lid-options">
                    <span className="extra">
                      <input
                        name="lid"
                        className="checkbox"
                        type="checkbox"
                      />
                    </span>
                    <span className="extra">
                      <input
                        name="no-lid"
                        className="checkbox"
                        type="checkbox"
                      />
                    </span>
                  </div>
                </div>
                <hr className="separator" />
                <h2 className="step">Paso 2: Configura tus alimentos</h2>
                <hr className="separator" />
                <div className="size">
                  <div className="size-container container">
                    <img
                      className="icon"
                      src={temperature}
                      alt="size"
                    />
                    <h3 className="text">Temperatura</h3>
                  </div>

                  <div className="options">
                    <button className="option">Al tiempo</button>
                    <button className="option">Caliente</button>
                  </div>
                </div>
                <hr className="separator" />
                <div className="extra">
                  <img
                    className="icon"
                    src={sauce}
                    alt="extra"
                  />
                  <div className="container">
                    <div className="block">
                      <h3 className="text">Salsa macha</h3>
                      <h3 className="text">Salsa chipotle</h3>
                    </div>
                  </div>

                  <div className="sauce-options">
                    <span className="extra sauce">
                      10$
                      <input
                        className="checkbox"
                        name="10"
                        type="checkbox"
                      />
                    </span>
                    <span className="extra">
                      20$
                      <input
                        name="20"
                        className="checkbox"
                        type="checkbox"
                      />
                    </span>
                  </div>
                </div>
                <div className="btn-container">
                  <button className="add-cart-btn">
                    Agregar al carrito $47
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default CombosDetailPage;
