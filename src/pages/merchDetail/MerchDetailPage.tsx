import ProductCardDetail from "../../components/ProductCardDetail/ProductCardDetail";
import product from "../../assets/product3.jpg";
import color from "../../assets/icons/color.svg";
import Layout from "../../includes/layout/Layout";
import tshirt from "../../assets/icons/t-shirt.svg";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import Slider from "../../components/Slider/Slider";
import { useLanguage } from "../../context/Langi18nContext";

import "./MerchDetailPage.scss";

function MerchDetailPage() {
  const { translate } = useLanguage();

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
                    <h3 className="text">{translate("size")}</h3>
                  </div>

                  <div className="options">
                    <button className="option">
                      {translate("small")} <br /> <span>S</span>
                    </button>
                    <button className="option">
                      {translate("medium")} <br /> <span>M</span>
                    </button>
                    <button className="option">
                      {translate("large")} <br /> <span>L</span>
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
                      <h3 className="text">{translate("green")}</h3>
                      <h3 className="text">{translate("darkBlue")}</h3>
                      <h3 className="text">{translate("orange")}</h3>
                      <h3 className="text">{translate("lightBlue")}</h3>
                      <h3 className="text">{translate("cream")}</h3>
                    </div>
                  </div>

                  <div className="extra-options">
                    <span className="extra">
                      <label>
                        <input
                          name="green"
                          type="checkbox"
                        />
                        <span className="custom-checkbox"></span>
                      </label>
                    </span>
                    <span className="extra">
                      <label>
                        <input
                          name="darkBlue"
                          type="checkbox"
                        />
                        <span className="custom-checkbox"></span>
                      </label>
                    </span>
                    <span className="extra">
                      <label>
                        <input
                          name="orange"
                          type="checkbox"
                        />
                        <span className="custom-checkbox"></span>
                      </label>
                    </span>
                    <span className="extra">
                      <label>
                        <input
                          name="lightBlue"
                          type="checkbox"
                        />
                        <span className="custom-checkbox"></span>
                      </label>
                    </span>
                    <span className="extra">
                      <label>
                        <input
                          name="cream"
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
                    {translate("accompanyPurchase")}
                  </h3>
                  <div className="cards">
                    <Slider />
                  </div>
                </div>

                <hr className="separator" />

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
export default MerchDetailPage;
