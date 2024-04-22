import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import { useLanguage } from "../../context/Langi18nContext";

import ProductCardDetail from "../../components/ProductCardDetail/ProductCardDetail";
import Layout from "../../includes/layout/Layout";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import no_found from "/assets/no-found.png";

import axiosInstance from "../../helpers/axios.helper";
import Combos from "../../components/Options/components/Combos";
import Alimentos from "../../components/Options/components/Alimentos";
import Coffe from "../../components/Options/components/Coffe";
import Te from "../../components/Options/components/Te";
import CoffeWithTe from "../../components/Options/components/CoffeWithTe";
import OtherDrinks from "../../components/Options/components/OtherDrinks";
import StoreShopping from "../../components/Options/components/StoreShopping";
import SpecialsMomo from "../../components/Options/components/SpecialMomo";

import { db } from "../../helpers/dexie_db.helper";
import { LoaderPage } from "../../loader/Loader";
import { useProductOptionStore } from "../../store/productOption.store";
import { useShoppingStore } from "../../store/shopping.store";

import "./DetailPage.scss";

function DrinkDetailPage() {
  const { cart, setStoreCart } = useShoppingStore();
  const { dataProductOption } = useProductOptionStore();
  const [product, setProduct] = useState<any>({});
  const [loader, isLoader] = useState<Boolean>(false);
  const [getSubtotal, setSubtotal] = useState<number>(0);
  const myRef = useRef<any>(null);
  const { product_id, type } = useParams();
  const { translate } = useLanguage();

  useEffect(() => {
    getDetailProduct();
  }, []);

  useEffect(() => {
    priceTotal(product);
  }, [dataProductOption]);

  async function addCart() {
    try {
      isLoader(true);
      await db.product.add({
        id: uuidv4(),
        name_product: product.name_product,
        price: getSubtotal,
        image: product.image,
        extra: JSON.stringify(dataProductOption),
        quanty: 1,
        subtotal: getSubtotal
      });
      setTimeout(() => {
        isLoader(false);
        setStoreCart(true);
      }, 1000);
    } catch (e) {
      console.log(e);
    }
  }

  const getDetailProduct = async () => {
    let response: any = await axiosInstance(`/product/?product_id=${product_id}`);
    if (response.data.items[0].image == "{}") {
      response.data.items[0].image = no_found;
    } else {
      response.data.items[0].image.replace(/(^"|"$|&quot;)/g, "");
      response.data.items[0].image = response.data.items[0].image
        .replace(/\{"/g, "")
        .replace(/\"}/g, "");
      if (response.data.items[0].image.includes('","')) {
        response.data.items[0].image = response.data.items[0].image.split('","')[0];
      }
    }
    setProduct(response.data.items[0]);
  };

  const optionHandler = (position: number) => {
    if (myRef.current) {
      myRef.current.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
  };

  const priceTotal = (product: any) => {
    
    let total: number = Number(product.price);
  
    if ("price" in dataProductOption.size) {
    
      total += isNaN(dataProductOption.size.price!) ? 0 : Number(dataProductOption.size.price);
    }
    if ("price" in dataProductOption.milk) {
     
      total += isNaN(dataProductOption.milk.price!) ? 0 :  Number(dataProductOption.milk.price!);
    }

    if ("price" in dataProductOption.coffee_type) {
   
      total += isNaN(dataProductOption.coffee_type.price!)? 0 : Number(dataProductOption.coffee_type.price!);
    }

    if ("price" in dataProductOption.sugar) {
  
      total += isNaN(dataProductOption.sugar.price!) ? 0 : Number(dataProductOption.sugar.price!);
    }

    if ("price" in dataProductOption.temperature) {

      total += isNaN(dataProductOption.temperature.price!) ? 0 : Number(dataProductOption.temperature.price!);
    }

    let extra_coffe = dataProductOption.extra_coffee.filter(
      (item) => "price" in item
    );

    if (extra_coffe.length > 0) {
      let resp = extra_coffe.reduce((total, item: any) => total + parseFloat(item.price), 0);
      total += resp;
    }
 
    let lid = dataProductOption.lid.filter(
      (item) => "price" in item
    );

    if (lid.length > 0) {
      console.log(
        "Price attribute Lid exists. Price value:",
        dataProductOption.lid
      );
      let resp = lid.reduce((total, item: any) => total + parseFloat(item.price), 0);
      total += resp;
    }

    let sauce = dataProductOption.sauce.filter(
      (item) => "price" in item
    );

    if (sauce.length > 0) {
      let resp = sauce.reduce((total, item:any) =>  total + parseFloat(item.price), 0)
      total += resp;
    }

    setSubtotal(total);
  };

  return (
    <Layout>
      {loader ? <LoaderPage /> : ""}
      <div className="products_category">
        <CategoryNav cart={cart} />
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
                  {product.categorys == "Combos" && (
                    <Combos optionHandler={(e) => optionHandler(e)} />
                  )}
                  {product.categorys == "Cafe" && (
                    <Coffe optionHandler={(e) => optionHandler(e)} />
                  )}
                  {product.categorys == "Alimentos" && (
                    <Alimentos optionHandler={(e) => optionHandler(e)} />
                  )}
                  {product.categorys == "Te" && (
                    <Te optionHandler={(e) => optionHandler(e)} />
                  )}
                  {product.categorys == "Cafe con Te" && (
                    <CoffeWithTe optionHandler={(e) => optionHandler(e)} />
                  )}
                  {product.categorys == "MOMO Specials" && (
                    <SpecialsMomo optionHandler={(e) => optionHandler(e)} />
                  )}
                  {product.categorys == "Otras Bebidas" && (
                    <OtherDrinks optionHandler={(e) => optionHandler(e)} />
                  )}
                  {product.categorys == "Tienda" && (
                    <StoreShopping
                      optionHandler={(e) => optionHandler(e)}
                      type={type}
                    />
                  )}
                </div>
                <div className="container-btn-payment">
                  <div className="btn-container">
                    {!isNaN(getSubtotal) && (<button onClick={() => addCart()} className="add-cart-btn">
                      {translate("addCart")} ${getSubtotal}
                    </button>)}
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
