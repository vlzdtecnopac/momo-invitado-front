import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useShoppingStore } from "../../store/shopping.store";
import { useLanguage } from "../../context/Langi18nContext";
import { LoaderPage } from "../../includes/loader/Loader";
import axiosInstance from "../../helpers/axios.helper";
import {
  initialProductOptionState,
  useProductOptionStore,
} from "../../store/productOption.store";
import Cart from "../Cart/Cart";
import { db } from "../../helpers/dexie_db.helper";
import "./CategoryNav.scss";

const CategoryNav: React.FC<{ cart: boolean }> = ({ cart }) => {
  const setDataProductOption = useProductOptionStore(
    (state) => state.setDataProductOption
  );
  const { setStoreCart } = useShoppingStore();
  const { translate } = useLanguage();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loader, setLoader] = useState<Boolean>(true);

  useEffect(() => {
    if (loader) {
      consultCategory();
      consultCount();
    }
  }, [loader]);

  const consultCategory = async () => {
    try {
      const response = await axiosInstance.get(`/category/`);
      setCategories(response.data);
      setLoader(false);
    } catch (e) {
      console.log(e);
    }
  };

  const consultCount = async () => {
    db.product
      .count()
      .then((ct) => {
        if (ct <= 0) {
          setStoreCart(false);
        } else {
          setStoreCart(true);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      {loader ? <LoaderPage /> : <Cart />}
      <nav className="cat_nav">
        <ul
          style={cart ? { marginLeft: "-55px" } : {}}
          className="categories"
        >
          {categories.map((category: any, index: number) => (
            <li
              className="category"
              key={index}
            >
              <button
                onClick={() => {
                  setDataProductOption(initialProductOptionState);
                  if (category.name_category == "Nuestra Tienda") {
                    navigate(`../merch-or-coffee/`);
                    return;
                  }
                  if (category.sub_category == "Cafe") {
                    navigate(`../hot-or-cold/cafe`);
                    return;
                  }
                  if (category.sub_category == "Te") {
                    navigate(`../hot-or-cold/te`);
                    return;
                  }
                  if (category.sub_category == "Cafe con Te") {
                    navigate(`../hot-or-cold/cafe con te`);
                    return;
                  }
                  if (category.sub_category == "MOMO Specials") {
                    navigate(`../hot-or-cold/especiales MOMO`);
                    return;
                  }
                  if (category.sub_category == "Alimentos") {
                    navigate(`../sweet-salty-snacks/`);
                    return;
                  } else {
                    navigate(`../products/${category.sub_category}`);
                    return;
                  }
                }}
              >
                {translate(category.name_category)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default CategoryNav;
