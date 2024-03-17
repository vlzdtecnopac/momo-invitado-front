import Layout from "../../includes/layout/Layout";
import banner from "../../assets/Banner.jpg";

import CustomButton from "../../components/CustomButton/CustomButton";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./ProductCategoryPage.scss";
import { Pagination } from "swiper/modules";

function ProductsPage() {
  const categoriesNav = [
    {
      icon: "coffee-icon",
      text: "Café",
      router: "",
    },
    {
      icon: "tea-icon",
      text: "Té",
      router: "",
    },
    {
      icon: "coffee-tea-icon",
      text: "Cafe con Té",
      router: "",
    },
    {
      icon: "specials-icon",
      text: "Especiales MOMO",
      router: "",
    },
    {
      icon: "food-icon",
      text: "Alimentos",
      router: "",
    },
    {
      icon: "combos-icon",
      text: "Combos",
      router: "",
    },
    {
      icon: "drinks-icon",
      text: "Otras Bebidas",
      router: "",
    },
    {
      icon: "store-icon",
      text: "Nuestra Tienda",
      router: "",
    },
  ];
  return (
    <>
      <Layout>
        <div className="products_page">
          <ul className="categories grid-4_xs-1">
            {categoriesNav.map((category, index) => (
              <li
                key={index}
                className="col options-container"
              >
                <CustomButton
                  icon={category.icon}
                  text={category.text}
                  onClick={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              </li>
            ))}
          </ul>
          <div className="content-slider">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={5}
              pagination={true}
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
        </div>
      </Layout>
    </>
  );
}

export default ProductsPage;
