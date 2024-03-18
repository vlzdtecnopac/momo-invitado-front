import { useEffect, useState } from "react";
import "./CategoryNav.scss";
import axios from "axios";
import { tokenHeader } from "../../helpers/token-header.helper";
import { LoaderPage } from "../../includes/loader/Loader";

function CategoryNav() {
  const [categories, setCategories] = useState([]);
  const [loader, setLoader] =  useState<Boolean>(true);


  useEffect(()=> {
    if(loader){
    consultCategory();
    }
  },[loader])

  const consultCategory = async() =>{
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/category/`, {headers: tokenHeader});
    setCategories(response.data);
    setLoader(false);
  }
  return (<>
    {loader? <LoaderPage/> : ""}
    <nav className="cat_nav">
      <ul className="categories">
        {categories.map((category: any, index: number) => (
          <li
            className="category"
            key={index}
          >
            <button>{category.name_category}</button>
          </li>
        ))}
      </ul>
    </nav>
    </>
  );
}

export default CategoryNav;
