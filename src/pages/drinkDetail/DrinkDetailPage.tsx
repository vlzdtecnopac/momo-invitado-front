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
import { useRef, useState } from "react";

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
                  <div className="size">
                    <div className=" size-container container">
                      <img className="icon" src={glass} alt="size" />
                      <h3 className="text">{translate("size")}</h3>
                    </div>
                    <div className="options">
                      <button
                        onClick={() => optionHandler(120)}
                        className="option"
                      >
                        {translate("small")} 12 Oz
                      </button>
                      <button
                        onClick={() => optionHandler(120)}
                        className="option"
                      >
                        {translate("large")} 16 Oz{" "}
                        <span className="extra-price">$10</span>
                      </button>
                    </div>
                  </div>
                  <hr className="separator" />
                  <div className="milk">
                    <div className="container">
                      <img className="icon" src={milk} alt="milk" />
                      <h3 className="text">{translate("milk")}</h3>
                    </div>
                    <div className="options">
                      <button
                        onClick={() => optionHandler(220)}
                        className="option"
                      >
                        {translate("whole")}
                      </button>
                      <button
                        onClick={() => optionHandler(220)}
                        className="option"
                      >
                        {translate("lactoseFree")}{" "}
                        <span className="extra-price">$5</span>
                      </button>
                      <button
                        onClick={() => optionHandler(220)}
                        className="option"
                      >
                        {translate("oatMilk")} <br />{" "}
                        <span className="extra-price">$9</span>
                      </button>
                    </div>
                  </div>
                  <hr className="separator" />
                  <div className="milk">
                    <div className="container">
                      <img className="icon" src={sugar} alt="sugar" />
                      <h3 className="text">{translate("sugar")}</h3>
                    </div>
                    <div className="options">
                      <button
                        onClick={() => optionHandler(320)}
                        className="option"
                      >
                        {translate("less")}
                      </button>
                      <button
                        onClick={() => optionHandler(320)}
                        className="option"
                      >
                        Original
                      </button>
                      <button
                        onClick={() => optionHandler(320)}
                        className="option"
                      >
                        {translate("more")}
                      </button>
                    </div>
                  </div>
                  <hr className="separator" />
                  <div className="extra">
                    <img className="icon" src={extra} alt="extra" />
                    <div className="container">
                      <div className="block">
                        <h3 className="text">{translate("extraCoffee")}</h3>
                        <h3 className="text">{translate("extraCream")}</h3>
                      </div>
                    </div>
                    <div className="extra-options">
                      <span className="extra">
                        10$
                        <label>
                          <input name="10" type="checkbox" />
                          <span className="custom-checkbox"></span>
                        </label>
                      </span>
                      <span className="extra">
                        20$
                        <label>
                          <input name="20" type="checkbox" />
                          <span className="custom-checkbox"></span>
                        </label>
                      </span>
                    </div>
                  </div>
                  <hr className="separator" />
                  <div className="extra">
                    <img className="icon" src={lid} alt="lid" />
                    <div className="container">
                      <div className="block">
                        <h3 className="text">{translate("lid")}</h3>
                        <h3 className="text">
                          {translate("noLid")}{" "}
                          <span className="recicle">
                            <img
                              className="recicle-icon"
                              src={recicle}
                              alt="recicle-icon"
                            />
                          </span>
                          <span className="recicle-text">
                            {translate("helpPlanet")}
                          </span>
                        </h3>{" "}
                      </div>
                    </div>
                    <div className="lid-options">
                      <span className="extra">
                        <label>
                          <input
                            name="tapa"
                            onChange={(e) => {
                              e.stopPropagation();
                              optionHandler(450)}}
                            type="checkbox"
                          />
                          <span className="custom-checkbox"></span>
                        </label>
                      </span>
                      <span className="extra">
                        <label>
                          <input
                            name="tapa"
                            type="checkbox"
                            onChange={(e) =>{
                              e.stopPropagation();
                              optionHandler(450)}}
                          />
                          <span className="custom-checkbox"></span>
                        </label>
                      </span>
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
        <div className="col-9 details-col">
          <div className="details">
            <div className="size">
              <div className=" size-container container">
                <img className="icon" src={temperature} alt="size" />
                <h3 className="text">{translate("temperature")}</h3>
              </div>

              <div className="options">
                <button className="option">{translate("roomTemp")}</button>
                <button className="option">{translate("hot")}</button>
              </div>
            </div>
            <hr className="separator" />
            <div className="extra">
              <img className="icon" src={sauce} alt="extra" />
              <div className="container">
                <div className="block">
                  <h3 className="text">{translate("machaSauce")}</h3>
                  <h3 className="text">{translate("chipotleSauce")}</h3>
                </div>
              </div>
              <div className="extra-options">
                <span className="extra">
                  10$
                  <label>
                    <input
                      name="tapa"
                      onChange={(e) =>{
                        e.stopPropagation();
                      }}
                      type="checkbox"
                    />
                    <span className="custom-checkbox"></span>
                  </label>
                </span>
                <span className="extra">
                  20$
                  <label>
                    <input
                      name="tapa"
                      onChange={(e) =>{
                        e.stopPropagation();
                      }}
                      type="checkbox"
                    />
                    <span className="custom-checkbox"></span>
                  </label>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
