import ProductCardDetail from "../../components/ProductCardDetail/ProductCardDetail";
import product from "../../assets/product2.jpg";
import sauce from "../../assets/icons/sauce.svg";
import Layout from "../../includes/layout/Layout";
import temperature from "../../assets/icons/temperature.svg";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import Slider from "../../components/Slider/Slider";
import "./FoodDetailPage.scss";

function FoodDetailPage() {
  return (
    <Layout>
      <CategoryNav />
      <div className="page-container">
        <div className="food_detail">
          <div className="grid-2">
            <div className="col-3 img-col">
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
                <div className="complement">
                  <h3 className="text complement_title">Acompaña tu bebida</h3>
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
