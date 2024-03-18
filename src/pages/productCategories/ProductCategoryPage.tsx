import Layout from "../../includes/layout/Layout";
import banner from "../../assets/Banner.jpg";

import CustomButton from "../../components/CustomButton/CustomButton";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./ProductCategoryPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { tokenHeader } from "../../helpers/token-header.helper";
import { LoaderPage } from "../../loader/Loader";
import { useNavigate } from "react-router-dom";

function ProductsPage() {
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
    }
  }

  return (
    <>
     {loader? <LoaderPage/> : ""}
      <Layout>
        <div className="products_page_category">
          <ul className="categories grid-4_xs-1">
            {categories.map((category: any, index) => (
              <li key={index} className="col options-container">
                <CustomButton
                  icon={category.class}
                  text={category.name_category}
                  onClick={function (): void {
                    navigate(category.sub_category)
                  }}
                />
              </li>
            ))}
          </ul>
          <div className="content-slider">
          <Swiper
            slidesPerView={1}
            spaceBetween={5}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              790: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              950: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              1990: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="banner" src={banner} alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="banner" src={banner} alt="banner" />
            </SwiperSlide>
          </Swiper>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ProductsPage;
