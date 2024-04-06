import { useEffect, useRef } from "react";
import { useLanguage } from "../../context/Langi18nContext";
import { useParams } from "react-router-dom";
import ProductCardDetail from "../../components/ProductCardDetail/ProductCardDetail";
import Layout from "../../includes/layout/Layout";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import Options from "../../components/Options/Options";
import OptionsList from "../../components/Options/OptionsList";
import product from "../../assets/product1.jpg";
import glass from "../../assets/icons/glass.svg";
import milk from "../../assets/icons/bottle.svg";
import sugar from "../../assets/icons/sugar.svg";
import extra from "../../assets/icons/extra.svg";
import lid from "../../assets/icons/lid.svg";
import "./DetailPage.scss";

function DrinkDetailPage() {
  const myRef = useRef<any>(null);
  const { product_id } = useParams();
  const { translate } = useLanguage();

  useEffect(()=> {
    console.log(product_id);
  }, [])

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
                <div
                  ref={myRef}
                  className="container-options-product"
                >
                  <Options
                    distanceScrolling={120}
                    titleOptions={translate("size")}
                    iconOptions={glass}
                    listOptions={[
                      translate("smallDrink"),
                      translate("largeDrink"),
                    ]}
                    optionHandler={(e: any) => {
                      optionHandler(e);
                    }}
                    attr="size"
                    price="10"
                  />
                  <hr className="separator" />
                  <Options
                    distanceScrolling={220}
                    titleOptions={translate("milk")}
                    iconOptions={milk}
                    listOptions={[
                      translate("whole"),
                      translate("lactoseFree"),
                      translate("oatMilk"),
                    ]}
                    optionHandler={(e: any) => optionHandler(e)}
                    attr="milk"
                    price="10"
                  />
                  <hr className="separator" />
                  <Options
                    distanceScrolling={320}
                    titleOptions={translate("sugar")}
                    iconOptions={sugar}
                    listOptions={[
                      translate("less"),
                      "Original",
                      translate("more"),
                    ]}
                    optionHandler={(e: any) => optionHandler(e)}
                    attr="sugar"
                  />
                  <hr className="separator" />
                  <OptionsList
                    optionHandler={(e: any) => optionHandler(e)}
                    listOptions={[
                      translate("extraCoffee"),
                      translate("extraCream"),
                    ]}
                    iconOptions={extra}
                    attr="extra_coffee"
                    multiple={true}
                  />
                  <hr className="separator" />
                  <OptionsList
                    optionHandler={(e: any) => optionHandler(e)}
                    listOptions={[translate("lid"), translate("noLid")]}
                    iconOptions={lid}
                    attr="lid"
                    multiple={false}
                  />
                  {/* <hr className="separator" /> */}
                  {/* <div className="complement">
                    <h3 className="text complement_title">
                      {translate("accompanyDrink")}
                    </h3>
                    <div className="cards">
                      <Slider />
                    </div>
                  </div> */}
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
