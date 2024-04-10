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

import "./DetailPage.scss";
import { db } from "../../helpers/dexie_db.helper";
import { LoaderPage } from "../../loader/Loader";
import { useProductOptionStore } from "../../store/productOption.store";
import { useShoppingStore } from "../../store/shopping.store";

function DrinkDetailPage() {
  const { cart, setStoreCart } = useShoppingStore();
  const { dataProductOption } = useProductOptionStore();
  const [product, setProduct] = useState<any>({});
  const [loader, isLoader] = useState<Boolean>(false);
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
        price: product.price,
        image: product.image,
        extra: JSON.stringify(dataProductOption),
        quanty: 1,
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

  const priceTotal = (product: any) => {

    console.clear();
    let total: number = product.price;

    if ("price" in dataProductOption.size) {
      console.log(
        "Price attribute Size exists. Price value:",
        dataProductOption.size.price
      );

      total += dataProductOption.size.price!;
    }
    if ("price" in dataProductOption.milk) {
      console.log(
        "Price attribute Milk exists. Price value:",
        dataProductOption.milk
      );
      total += dataProductOption.milk.price!;
    }

    if ("price" in dataProductOption.coffee_type) {
      console.log(
        "Price attribute Coffe Type exists. Price value:",
        dataProductOption.coffee_type
      );

      total += dataProductOption.coffee_type.price!;
    }

    if ("price" in dataProductOption.sugar) {
      console.log(
        "Price attribute Sugar exists. Price value:",
        dataProductOption.sugar
      );
      total += dataProductOption.sugar.price!;
    }

    if ("price" in dataProductOption.temperature) {
      console.log(
        "Price attribute Temperature exists. Price value:",
        dataProductOption.temperature
      );
      total += dataProductOption.temperature.price!;
    }

    let extra_coffe = dataProductOption.extra_coffee.filter(
      (item) => "price" in item
    );

    if (extra_coffe.length > 0) {
      console.log(
        "Price attribute Extra Coffe exists. Price value:",
        extra_coffe
      );
    }
 
    let lid = dataProductOption.lid.filter(
      (item) => "price" in item
    );

    if (lid.length > 0) {
      console.log(
        "Price attribute Lid exists. Price value:",
        dataProductOption.lid
      );
    }

    let sauce = dataProductOption.sauce.filter(
      (item) => "price" in item
    );

    if (sauce.length > 0) {
      console.log(
        "Price attribute Sauce exists. Price value:",
        dataProductOption.sauce
      );
    }
    setProduct({...product, price: total});
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
                  {product.categorys == "Café con Té" && (
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
                    <button onClick={() => addCart()} className="add-cart-btn">
                      {translate("addCart")} ${product.price}
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
