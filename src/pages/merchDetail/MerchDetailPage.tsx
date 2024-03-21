import ProductCardDetail from "../../components/ProductCardDetail/ProductCardDetail";
import product from "../../assets/product3.jpg";
import color from "../../assets/icons/color.svg";
import Layout from "../../includes/layout/Layout";
import tshirt from "../../assets/icons/t-shirt.svg";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import Slider from "../../components/Slider/Slider";
import "./MerchDetailPage.scss";

function MerchDetailPage() {
  return (
    <Layout>
      <div className="category-product-merch">
      <CategoryNav />
      </div>
      <div className="page-container">
        <div className="merch_detail">
          <div className="grid-2">
            <div className="col-3">
              <ProductCardDetail
                img={product}
                name="Croissant de
                almendras"
                description="Croissant de
                almendras"
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
                      10$
                      <label>
                      <input
                        name="10"
                        type="checkbox"
                      />
                        <span className="custom-checkbox"></span>
                      </label>
                    </span>
                    <span className="extra">
                      20$
                      <label>
                      <input
                        name="20"
                        type="checkbox"
                      />
                       <span className="custom-checkbox"></span>
                      </label>
                    </span>
                  </div>
                </div>
                <hr className="separator" />
                <div className="complement">
                  <h3 className="text complement_title">Acompaña tu comida</h3>
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
export default MerchDetailPage;
