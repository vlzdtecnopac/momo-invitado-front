import Layout from "../../includes/layout/Layout";
import "./ProductsPage.scss";

import coffeeIcon from "../../assets/icons/coffee_mug.svg";
import teaIcon from "../../assets/icons/tea_mug.svg";
import coffeeTeaIcon from "../../assets/icons/coffee_tea.svg";
import specialsIcon from "../../assets/icons/specials.svg";
import foodIcon from "../../assets/icons/croissant.svg";
import combosIcon from "../../assets/icons/combos.svg";
import drinksIcon from "../../assets/icons/other_drinks.svg";
import storeIcon from "../../assets/icons/our_store.svg";

const categories = [
  {
    icon: { coffeeIcon },
    text: "Café",
  },
  {
    icon: { teaIcon },
    text: "Té",
  },
  {
    icon: { coffeeTeaIcon },
    text: "Cafe con Té",
  },
  {
    icon: { specialsIcon },
    text: "Especiales MOMO",
  },
  {
    icon: { foodIcon },
    text: "Alimentos",
  },
  {
    icon: { combosIcon },
    text: "Combos",
  },
  {
    icon: { drinksIcon },
    text: "Otras Bebidas",
  },
  {
    icon: { storeIcon },
    text: "Nuestra Tienda",
  },
];

function ProductsPage() {
  return (
    <>
      <Layout>
        <div className="products_page grid-4_xs-1 ">
          {/* {categories.map((category, index) => (
            <div key={index}
              className="col">   
            </div> */}
        </div>
      </Layout>
    </>
  );
}
export default ProductsPage;
