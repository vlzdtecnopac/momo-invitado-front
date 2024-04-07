import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useLanguage } from "../../context/Langi18nContext";

import ProductCardDetail from "../../components/ProductCardDetail/ProductCardDetail";
import Layout from "../../includes/layout/Layout";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import no_found from "../../assets/no-found.png";

import axiosInstance from "../../helpers/axios.helper";
import Combos from "../../components/Options/components/Combos";
import Alimentos from "../../components/Options/components/Alimentos";
import Coffe from "../../components/Options/components/Coffe";
import Te from "../../components/Options/components/Te";
import CoffeWithTe from "../../components/Options/components/CoffeWithTe";
import OtherDrinks from "../../components/Options/components/OtherDrinks";
import StoreShopping from "../../components/Options/components/StoreShopping";
import SpecialsMomo from "../../components/Options/components/SpecialMomo";

import "./DetailPage.scss";

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
                  {(product.categorys == "Combos" ) && (<Combos optionHandler={(e)=>optionHandler(e)} />)}
                  {(product.categorys == "Cafe" ) && (<Coffe />)}
                  {(product.categorys == "Alimentos" ) && (<Alimentos optionHandler={(e)=>optionHandler(e)} />)}
                  {(product.categorys == "Te" ) && (<Te />)}
                  {(product.categorys == "Café con Té") && (<CoffeWithTe/>)}
                  {(product.categorys == "MOMO Specials") && (<SpecialsMomo/>)}
                  {(product.categorys == "Otras Bebidas") && (<OtherDrinks/>)}
                  {(product.categorys == "Tienda") && (<StoreShopping/>)}
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
