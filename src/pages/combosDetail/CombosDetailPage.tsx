import { useRef } from "react";
import ProductCardDetail from "../../components/ProductCardDetail/ProductCardDetail";
import product from "../../assets/product1.jpg";
import glass from "../../assets/icons/glass.svg";
import milk from "../../assets/icons/bottle.svg";
import sugar from "../../assets/icons/sugar.svg";
import extra from "../../assets/icons/extra.svg";
import lid from "../../assets/icons/lid.svg";
import sauce from "../../assets/icons/sauce.svg";
import temperature from "../../assets/icons/temperature.svg";
import Layout from "../../includes/layout/Layout";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import { useLanguage } from "../../context/Langi18nContext";
import Options from "../../components/Options/Options";
import OptionsList from "../../components/Options/OptionsList";
import "./CombosDetailPage.scss";

function CombosDetailPage() {
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
      <div className="page-category">
        <CategoryNav />
      </div>
      <div className="page-container">
        <div className="combos_detail">
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
                  className="content-detail-page"
                >
                  <h2 className="step">{translate("drinkStepOne")}</h2>
                  <hr className="separator" />
                  <Options
                    distanceScrolling={160}
                    titleOptions={translate("size")}
                    iconOptions={glass}
                    listOptions={["Chico 12 oz", "Grande 16 Oz"]}
                    optionHandler={(e: any) => optionHandler(e)}
                    attr="size"
                  />
                  <hr className="separator" />
                  <Options
                    distanceScrolling={260}
                    titleOptions={translate("milk")}
                    iconOptions={milk}
                    listOptions={[
                      translate("whole"),
                      translate("lactoseFree"),
                      translate("oatMilk"),
                    ]}
                    optionHandler={(e: any) => optionHandler(e)}
                    attr="milk"
                  />
                  <hr className="separator" />
                  <Options
                    distanceScrolling={280}
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
                    listOptions={[
                      "Con tapa",
                      'Sin tapa <span class="recicle"><img class="recicle-icon" src="/src/assets/icons/recicle.svg" alt="recicle-icon"></span> Ayúdanos a cuidar el planeta',
                    ]}
                    iconOptions={lid}
                    attr="lid"
                    multiple={false}
                  />
                  <hr className="separator" />
                  <h2 className="step">{translate("drinkStepTwo")}</h2>
                  <hr className="separator" />
                  <Options
                    distanceScrolling={360}
                    titleOptions={translate("temperature")}
                    iconOptions={temperature}
                    listOptions={[translate("roomTemp"), translate("hot")]}
                    optionHandler={(e: any) => optionHandler(e)}
                    attr="temperature"
                  />
                  <hr className="separator" />
                  <OptionsList
                    listOptions={[
                      translate("machaSauce"),
                      translate("chipotleSauce"),
                    ]}
                    iconOptions={sauce}
                    distanceScrolling={310}
                    attr="sauce"
                    multiple={true}
                  />
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
export default CombosDetailPage;
