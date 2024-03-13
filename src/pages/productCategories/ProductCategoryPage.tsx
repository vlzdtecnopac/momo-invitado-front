import Layout from "../../includes/layout/Layout";
import banner from "../../assets/Banner.jpg";
import "./ProductCategoryPage.scss";
import { useLocation, useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";

function ProductsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavegation = (nav: string) => navigate(nav);

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
        <nav className="products_page">
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
            <img
              className="banner"
              src={banner}
              alt="banner"
            />
          </ul>
        </nav>
      </Layout>
    </>
  );
}

export default ProductsPage;
