import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguage } from "../../context/Langi18nContext";
import Layout from "../../includes/layout/Layout";
import { LoaderPage } from "../../loader/Loader";
import axiosInstance from "../../helpers/axios.helper";
import CustomButton from "../../components/CustomButton/CustomButton";

import banner from "/assets/Banner.jpg";
import "swiper/css";
import "./ProductCategoryPage.scss";
import "swiper/css/pagination";

function ProductsPage() {
  const { translate } = useLanguage();

  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loader, setLoader] = useState<boolean>(true);

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
      <Layout>
        {loader ? <LoaderPage /> : ""}
        <div className="products_page_category">
          <ul className="categories grid-4_xs-1">
            {categories.map((category: any, index) => (
              <li
                key={index}
                className="col-3 options-container"
              >
                <CustomButton
                  icon={category.class}
                  text={translate(`${category.name_category}`)}
                  onClick={function (): void {
                    if (category.sub_category == "Tienda") {
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
                />
              </li>
            ))}
          </ul>
          {!loader ? (
            <div className="content-slider">
              <Swiper
                slidesPerView={1}
                spaceBetween={5}
                pagination={true}
                modules={[Pagination]}
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
                  <img
                    className="banner"
                    src={banner}
                    alt="banner"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="banner"
                    src={banner}
                    alt="banner"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          ) : (
            ""
          )}
        </div>
      </Layout>
    </>
  );
}

export default ProductsPage;
