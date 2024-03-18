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

function ProductsPage() {
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

  return (
    <>
     {loader? <LoaderPage/> : ""}
      <Layout>
        <div className="products_page">
          <ul className="categories grid-4_xs-1">
            {categories.map((category: any, index) => (
              <li key={index} className="col options-container">
                <CustomButton
                  icon={category.class}
                  text={category.name_category}
                  onClick={function (): void {
                    throw new Error("Function not implemented.");
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
