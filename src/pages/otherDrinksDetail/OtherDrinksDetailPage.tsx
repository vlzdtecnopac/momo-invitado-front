import ProductCardDetail from "../../components/ProductCardDetail/ProductCardDetail";
import product from "../../assets/product5.jpg";
import Layout from "../../includes/layout/Layout";
import temperature from "../../assets/icons/temperature.svg";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import Slider from "../../components/Slider/Slider";
import { useLanguage } from "../../context/Langi18nContext";

import "./OtherDrinksDetailPage.scss";

function OtherDrinksDetailPage() {
  const { translate } = useLanguage();
  return (
    <Layout>
      <div className="category-product-drink">
        <CategoryNav />
      </div>
      <div className="page-container">
        <div className="other_drinks_detail">
          <div className="grid-2">
            <div className="col-3">
              <ProductCardDetail
                img={product}
                name="Botella ecopack 100% reciclable"
                description="Botella ecopack 100% reciclable"
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
                <div className="complement">
                  <h3 className="text complement_title">
                    {translate("accompanyDrink")}
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
export default OtherDrinksDetailPage;
