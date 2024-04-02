import ProductCardDetail from "../../components/ProductCardDetail/ProductCardDetail";
import product from "../../assets/product3.jpg";
import color from "../../assets/icons/color.svg";
import Layout from "../../includes/layout/Layout";
import tshirt from "../../assets/icons/t-shirt.svg";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import Slider from "../../components/Slider/Slider";
import { useLanguage } from "../../context/Langi18nContext";

import "./MerchDetailPage.scss";
import Options from "../../components/Options/Options";
import OptionsExtra from "../../components/Options/OptionsExtra";

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
                <Options
                  distanceScrolling={320}
                  titleOptions={translate("size")}
                  iconOptions={tshirt}
                  listOptions={[
                    `${translate("small")}`,
                    `${translate("medium")}`,
                    `${translate("large")}`,
                  ]}
                  attr="size"
                />
                <hr className="separator" />
                <OptionsExtra
                  listOptions={[
                    `${translate("green")}`,
                    `${translate("darkBlue")}`,
                    `${translate("orange")}`,
                    `${translate("lightBlue")}`,
                    `${translate("cream")}`,
                  ]}
                  icon={color}
                  attr="color"
                  multiple={false}
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
