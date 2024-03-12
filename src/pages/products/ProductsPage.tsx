import Layout from "../../includes/layout/Layout";

import coffeeIcon from "../../assets/icons/coffee_mug.svg";
import teaIcon from "../../assets/icons/tea_mug.svg";
import coffeeTeaIcon from "../../assets/icons/coffee_tea.svg";
import specialsIcon from "../../assets/icons/specials.svg";
import foodIcon from "../../assets/icons/croissant.svg";
import combosIcon from "../../assets/icons/combos.svg";
import drinksIcon from "../../assets/icons/other_drinks.svg";
import storeIcon from "../../assets/icons/our_store.svg";
import banner from "../../assets/Banner.jpg";
import "./ProductsPage.scss";

const categories = [
  {
    icon: coffeeIcon,
    text: "Café",
  },
  {
    icon: teaIcon,
    text: "Té",
  },
  {
    icon: coffeeTeaIcon,
    text: "Cafe con Té",
  },
  {
    icon: specialsIcon,
    text: "Especiales MOMO",
  },
  {
    icon: foodIcon,
    text: "Alimentos",
  },
  {
    icon: combosIcon,
    text: "Combos",
  },
  {
    icon: drinksIcon,
    text: "Otras Bebidas",
  },
  {
    icon: storeIcon,
    text: "Nuestra Tienda",
  },
];

function ProductsPage() {
  return (
    <>
      <Layout>
        <div className="products_page">
          <div className="categories grid-4_xs-1">
            {categories.map((category, index) => (
              <div
                key={index}
                className="col options-container"
              >
                <button className="custom-btn">
                  <img src={category.icon}></img>
                  <span className="text">{category.text}</span>
                </button>
              </div>
            ))}
            <img
              className="banner"
              src={banner}
              alt="banner"
            />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ProductsPage;
