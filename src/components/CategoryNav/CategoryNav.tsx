import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/Langi18nContext";
import { LoaderPage } from "../../includes/loader/Loader";
import axiosInstance from "../../helpers/axios.helper";
import {
  initialProductOptionState,
  useProductOptionStore,
} from "../../store/productOption.store";
import Cart from "../Cart/Cart";
import "./CategoryNav.scss";

function CategoryNav() {
  const setDataProductOption = useProductOptionStore(
    (state) => state.setDataProductOption
  );
  const { translate } = useLanguage();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loader, setLoader] = useState<Boolean>(true);

  useEffect(() => {
    if (loader) {
      consultCategory();
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
  return (
    <>
      {loader ? <LoaderPage /> : <Cart />}
      <nav className="cat_nav">
        <ul className="categories">
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
                  if (category.name_category == "Café") {
                    navigate(`../hot-or-cold/`);
                    return;
                  }
                  if (category.name_category == "Té") {
                    navigate(`../hot-or-cold/`);
                    return;
                  }
                  if (category.name_category == "Alimentos") {
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
}

export default CategoryNav;
