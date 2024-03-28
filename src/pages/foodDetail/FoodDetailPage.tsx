import { useRef } from "react";
import { useLanguage } from "../../context/Langi18nContext";

import ProductCardDetail from "../../components/ProductCardDetail/ProductCardDetail";

import Layout from "../../includes/layout/Layout";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import Slider from "../../components/Slider/Slider";

import Options from "../../components/Options/Options";
import OptionsList from "../../components/Options/OptionsList";

import product from "../../assets/product2.jpg";
import glass from "../../assets/icons/glass.svg";
import milk from "../../assets/icons/bottle.svg";
import sugar from "../../assets/icons/sugar.svg";
import extra from "../../assets/icons/extra.svg";
import lid from "../../assets/icons/lid.svg";
import temperature from "../../assets/icons/temperature.svg";
import sauce from "../../assets/icons/sauce.svg";

import "./FoodDetailPage.scss";

function FoodDetailPage() {
  const myRef = useRef<any>(null);
  const { translate } = useLanguage();

  const optionHandler = (position: number) => {
    if (myRef.current) {
      myRef.current.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
  };

  return (
    <Layout>
      <div className="products_category">
        <CategoryNav />
      </div>
      <div className="page-container">
        <div className="drink_detail">
          <div className="grid-2">
            <div className="col-3">
              <ProductCardDetail
                img={product}
                name="Croissant de almendras"
                description="Bebida de chocolate con macadamia"
              />
            </div>
            <div className="col-9 details-col detail-card">
              <div className="details">
                <div ref={myRef} className="container-options-product">
                <Options
                    distanceScrolling={320}
                    titleOptions={translate("temperature")}
                    iconOptions={temperature}
                    listOptions={["Al Tiempo", "Caliente"]}
                  
                  />
          <hr className="separator" />
          <OptionsList listOptions={["Salsa Macha", "Salsa chipotle"]} iconOptions={sauce} distanceScrolling={310}/>
   
                  <div className="complement">
                    <h3 className="text complement_title">
                      {translate("accompanyDrink")}
                    </h3>
                    <div className="cards">
                      <Slider />
                    </div>
                  </div>
                </div>
                <div className="container-btn-payment">
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
export default FoodDetailPage;





