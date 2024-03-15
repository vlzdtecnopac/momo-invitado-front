import ProductCardDetail from "../../components/ProductCardDetail/ProductCardDetail";
import product from "../../assets/product3.jpg";
import color from "../../assets/icons/color.svg";
import Layout from "../../includes/layout/Layout";
import tshirt from "../../assets/icons/t-shirt.svg";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import Slider from "../../components/Slider/Slider";
import "./MerchDetailPage.scss";

function FoodDetailPage() {
  return (
    <Layout>
      <CategoryNav />
      <div className="page-container">
        <div className="merch_detail">
          <div className="grid-2">
            <div className="col-3 img-col">
              <ProductCardDetail
                img={product}
                name="Camiseta t-shirt color azul"
                description="Camiseta t-shirt color azul"
              />
            </div>
            <div className="col-9 details-col detail-card">
              <div className="details">
                <div className="size">
                  <div className=" size-container container">
                    <img
                      className="icon"
                      src={tshirt}
                      alt="size"
                    />
                    <h3 className="text">Talla</h3>
                  </div>

                  <div className="options">
                    <button className="option">
                      Chico <br /> <span className="extra-price">S</span>
                    </button>
                    <button className="option">
                      Mediano <br /> <span className="extra-price">M</span>
                    </button>
                    <button className="option">
                      Grande <br />
                      <span className="extra-price">L</span>
                    </button>
                  </div>
                </div>
                <hr className="separator" />
                <div className="extra">
                  <img
                    className="icon"
                    src={color}
                    alt="extra"
                  />
                  <div className="container">
                    <div className="block">
                      <h3 className="text">Verde</h3>
                      <h3 className="text">Azul oscuro</h3>
                      <h3 className="text">Naranja</h3>
                      <h3 className="text">Azul claro</h3>
                      <h3 className="text">Crema</h3>
                    </div>
                  </div>

                  <div className="extra-options">
                    <span className="extra">
                      <input
                        className="checkbox"
                        name="green"
                        type="checkbox"
                      />
                    </span>
                    <span className="extra">
                      <input
                        name="dark-blue"
                        className="checkbox"
                        type="checkbox"
                      />
                    </span>
                    <span className="extra">
                      <input
                        name="orange"
                        className="checkbox"
                        type="checkbox"
                      />
                    </span>
                    <span className="extra">
                      <input
                        name="light-blue"
                        className="checkbox"
                        type="checkbox"
                      />
                    </span>
                    <span className="extra">
                      <input
                        name="cream"
                        className="checkbox"
                        type="checkbox"
                      />
                    </span>
                  </div>
                </div>
                <hr className="separator" />
                <div className="complement">
                  <h3 className="text complement_title">Acompaña compra</h3>
                  <div className="cards">
                    <Slider />
                  </div>
                </div>
                <hr className="separator" />
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
export default FoodDetailPage;
