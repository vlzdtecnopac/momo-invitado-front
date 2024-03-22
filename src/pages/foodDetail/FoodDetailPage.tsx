import ProductCardDetail from "../../components/ProductCardDetail/ProductCardDetail";
import product from "../../assets/product2.jpg";
import sauce from "../../assets/icons/sauce.svg";
import Layout from "../../includes/layout/Layout";
import temperature from "../../assets/icons/temperature.svg";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import Slider from "../../components/Slider/Slider";
import { useLanguage } from "../../context/Langi18nContext";

import "./FoodDetailPage.scss";

function FoodDetailPage() {
  const { translate } = useLanguage();

  return (
    <Layout>
      <div className="products_category">
        <CategoryNav />
      </div>
      <div className="page-container">
        <div className="food_detail">
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
                      src={temperature}
                      alt="size"
                    />
                    <h3 className="text">{translate("temperature")}</h3>
                  </div>

                  <div className="options">
                    <button className="option">{translate("roomTemp")}</button>
                    <button className="option">{translate("hot")}</button>
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

                  <div className="extra-options">
                    <span className="extra">
                      10$
                      <label>
                        <input
                          className="checkbox"
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
                          className="checkbox"
                          type="checkbox"
                        />
                        <span className="custom-checkbox"></span>
                      </label>
                    </span>
                  </div>
                </div>
                <hr className="separator" />
                <div className="complement">
                  <h3 className="text complement_title">
                    {translate("accompanyFood")}
                  </h3>
                  <div className="cards">
                    <Slider />
                  </div>
                </div>
                <div className="btn-container">
                  <button className="add-cart-btn">
                    {translate("addCart")} $47
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
