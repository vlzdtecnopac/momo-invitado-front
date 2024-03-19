import { useEffect, useState } from "react";
import axios from "axios";
import { tokenHeader } from "../../helpers/token-header.helper";
import { LoaderPage } from "../../includes/loader/Loader";
import "./CategoryNav.scss";
import { useNavigate } from "react-router-dom";

function CategoryNav() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loader, setLoader] =  useState<Boolean>(true);


  useEffect(()=> {
    if(loader){
    consultCategory();
    }
  },[loader])

  const consultCategory = async() =>{
    try{
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/category/`, {headers: tokenHeader});
    setCategories(response.data);
    setLoader(false);
    }catch(e){
      console.log(e);
      navigate("/")
    }
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
