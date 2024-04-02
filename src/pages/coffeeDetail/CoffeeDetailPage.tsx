import ProductCardDetail from "../../components/ProductCardDetail/ProductCardDetail";
import product from "../../assets/product4.jpg";
import coffeeBag from "../../assets/icons/coffee_bag.svg";
import Layout from "../../includes/layout/Layout";
import beans from "../../assets/icons/coffee_beans.svg";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import Slider from "../../components/Slider/Slider";
import { useLanguage } from "../../context/Langi18nContext";

import "./CoffeeDetailPage.scss";
import Options from "../../components/Options/Options";

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
                  <Options
                    titleOptions={translate("coffeeType")}
                    iconOptions={beans}
                    listOptions={[translate("ground"), translate("beans")]}
                    attr={"coffee_type"}
                  />
                  <hr className="separator" />
                  <Options
                    titleOptions={translate("size")}
                    iconOptions={coffeeBag}
                    listOptions={["Chico 250gr", "Mediano 500gr", "Grande 1kg"]}
                    attr={"size"}
                  />
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
                      {translate("addCart")} $47
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
