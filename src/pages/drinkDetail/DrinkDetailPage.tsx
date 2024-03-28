import ProductCardDetail from "../../components/ProductCardDetail/ProductCardDetail";
import product from "../../assets/product1.jpg";
import glass from "../../assets/icons/glass.svg";
import milk from "../../assets/icons/bottle.svg";
import sugar from "../../assets/icons/sugar.svg";
import extra from "../../assets/icons/extra.svg";
import lid from "../../assets/icons/lid.svg";
import recicle from "../../assets/icons/recicle.svg";
import temperature from "../../assets/icons/temperature.svg";
import sauce from "../../assets/icons/sauce.svg";

import Layout from "../../includes/layout/Layout";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import Slider from "../../components/Slider/Slider";
import { useLanguage } from "../../context/Langi18nContext";

import "./DrinkDetailPage.scss";
import { useRef } from "react";
import Options from "../../components/Options/Options";
import OptionsList from "../../components/Options/OptionsList";

function DrinkDetailPage() {
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
                name="Macadamia Black Tea Soda"
                description="Bebida de chocolate con macadamia"
              />
            </div>
            <div className="col-9 details-col detail-card">
              <div className="details">
                <div ref={myRef} className="container-options-product">
                  <Options
                    distanceScrolling={120}
                    titleOptions="Tamaño"
                    iconOptions={glass}
                    listOptions={["Chico 12 oz", "Grande 16 Oz"]}
                    optionHandler={(e: any) => optionHandler(e)}
                  />
                  <hr className="separator" />
                  <Options
                    distanceScrolling={220}
                    titleOptions="Leche"
                    iconOptions={milk}
                    listOptions={["Entrada", "Deslactosada", "Avena"]}
                    optionHandler={(e: any) => optionHandler(e)}
                  />
                  <hr className="separator" />
                  <Options
                    distanceScrolling={320}
                    titleOptions={translate("sugar")}
                    iconOptions={sugar}
                    listOptions={["Menos", "Original", "Más"]}
                    optionHandler={(e: any) => optionHandler(e)}
                  />
                  <hr className="separator" />
                  <OptionsList optionHandler={(e: any) => optionHandler(e)} listOptions={["Extra shot de café", "Extra de crema"]} iconOptions={extra} />
                  <hr className="separator" />
                  <OptionsList optionHandler={(e: any) => optionHandler(e)} listOptions={["Con tapa", 'Sin tapa <span class="recicle"><img class="recicle-icon" src="/src/assets/icons/recicle.svg" alt="recicle-icon"></span> Ayúdanos a cuidar el planeta']} iconOptions={lid} />
                  <hr className="separator" />
                  <div className="complement">
                    <h3 className="text complement_title">
                      {translate("accompanyDrink")}
                    </h3>
                    <div className="cards">
                      <Slider />
                    </div>
                    <DetailsProductOptionsRelations />
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
export default DrinkDetailPage;

function DetailsProductOptionsRelations() {
  const { translate } = useLanguage();

  return (
    <div className="food_detail">
      <div>
        <Options
                    distanceScrolling={320}
                    titleOptions={translate("temperature")}
                    iconOptions={temperature}
                    listOptions={["Al Tiempo", "Caliente"]}
                  
                  />
          <hr className="separator" />
          <OptionsList listOptions={["Salsa Macha", "Salsa chipotle"]} iconOptions={sauce} distanceScrolling={310}/>
        </div>
    </div>
  );
}
