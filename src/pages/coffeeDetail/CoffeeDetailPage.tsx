import ProductCardDetail from "../../components/ProductCardDetail/ProductCardDetail";
import product from "../../assets/product4.jpg";
import coffeeBag from "../../assets/icons/coffee_bag.svg";
import Layout from "../../includes/layout/Layout";
import beans from "../../assets/icons/coffee_beans.svg";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import Slider from "../../components/Slider/Slider";
import { useLanguage } from "../../context/Langi18nContext";

import "./CoffeeDetailPage.scss";

function CoffeeDetailPage() {
  const { translate } = useLanguage();
  return (
    <Layout>
      <div className="products_category">
        <CategoryNav />
      </div>
      <div className="page-container">
        <div className="coffee_detail">
          <div className="grid-2">
            <div className="col-3">
              <ProductCardDetail
                img={product}
                name="Café MOMO"
                description="Café MOMO"
              />
            </div>
            <div className="col-9 details-col detail-card">
              <div className="details">
                <div className="container-options">
                  <div className="type">
                    <div className=" type-container container">
                      <img
                        className="icon"
                        src={beans}
                        alt="type"
                      />
                      <h3 className="text">{translate("coffeeType")}</h3>
                    </div>

                    <div className="options">
                      <button className="option">{translate("ground")}</button>
                      <button className="option">{translate("beans")}</button>
                    </div>
                  </div>
                  <hr className="separator" />
                  <div className="size">
                    <div className=" size-container container">
                      <img
                        className="icon"
                        src={coffeeBag}
                        alt="size"
                      />
                      <h3 className="text">{translate("size")}</h3>
                    </div>
                    <div className="options">
                      <button className="option">
                        {translate("small")} <br />{" "}
                        <span className="extra-price">250gr</span>
                      </button>
                      <button className="option">
                        {translate("medium")} <br />{" "}
                        <span className="extra-price">500gr</span>
                      </button>
                      <button className="option">
                        {translate("large")} <br />
                        <span className="extra-price">1Kg</span>
                      </button>
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
                </div>
                <div className="container-payment">
                  <hr className="separator" />
                  <div className="btn-container">
                    <button className="add-cart-btn">
                      {translate("addcart")} $47
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default CoffeeDetailPage;
