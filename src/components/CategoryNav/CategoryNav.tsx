import { useEffect, useState } from "react";
import { LoaderPage } from "../../includes/loader/Loader";

import axiosInstance from "../../helpers/axios.helper";
import Cart from "../Cart/Cart";
import "./CategoryNav.scss";
import { useLanguage } from "../../context/Langi18nContext";

function CategoryNav() {
  const { translate } = useLanguage();

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
      {loader ? <LoaderPage /> : ""}
      <Cart />
      <nav className="cat_nav">
        <ul className="categories">
          {categories.map((category: any, index: number) => (
            <li
              className="category"
              key={index}
            >
              <button>{translate(category.name_category)}</button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default CategoryNav;
