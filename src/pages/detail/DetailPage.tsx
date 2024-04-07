import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useLanguage } from "../../context/Langi18nContext";

import ProductCardDetail from "../../components/ProductCardDetail/ProductCardDetail";
import Layout from "../../includes/layout/Layout";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import Options from "../../components/Options/Options";
import OptionsList from "../../components/Options/OptionsList";
import OptionsExtra from "../../components/Options/OptionsExtra";
import temperature from "../../assets/icons/temperature.svg";
import coffeeBag from "../../assets/icons/coffee_bag.svg";
import beans from "../../assets/icons/coffee_beans.svg";
import tshirt from "../../assets/icons/t-shirt.svg";
import sauce from "../../assets/icons/sauce.svg";
import no_found from "../../assets/no-found.png";
import glass from "../../assets/icons/glass.svg";
import milk from "../../assets/icons/bottle.svg";
import sugar from "../../assets/icons/sugar.svg";
import extra from "../../assets/icons/extra.svg";
import color from "../../assets/icons/color.svg";
import lid from "../../assets/icons/lid.svg";

import "./DetailPage.scss";
import axiosInstance from "../../helpers/axios.helper";
import Combos from "../../components/Options/components/Combos";
import Alimentos from "../../components/Options/components/Alimentos";
import Coffe from "../../components/Options/components/Coffe";
import Te from "../../components/Options/components/Te";

function DrinkDetailPage() {
  const myRef = useRef<any>(null);
  const { product_id } = useParams();
  const { translate } = useLanguage();
  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    getDetailProduct();
  }, []);

  const getDetailProduct = async () => {
    let response = await axiosInstance(`/product/?product_id=${product_id}`);
    if (response.data[0].image == "{}") {
      response.data[0].image = no_found;
    } else {
      response.data[0].image.replace(/(^"|"$|&quot;)/g, "");
      response.data[0].image = response.data[0].image
        .replace(/\{"/g, "")
        .replace(/\"}/g, "");
      if (response.data[0].image.includes('","')) {
        response.data[0].image = response.data[0].image.split('","')[0];
      }
    }
    console.log(response.data[0]);
    setProduct(response.data[0]);
  };

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
                img={product.image}
                name={product.name_product}
                description={product.description}
              />
            </div>
            <div className="col-9 details-col detail-card">
              <div className="details">
                <div ref={myRef} className="container-options-product">
                  {(product.categorys == "Combos" ) && (<Combos />)}
                  {(product.categorys == "Cafe" ) && (<Coffe />)}
                  {(product.categorys == "Alimentos" ) && (<Alimentos />)}
                  {(product.categorys == "Te" ) && (<Te />)}
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
