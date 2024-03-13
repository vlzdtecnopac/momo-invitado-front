import "./CategoryNav.scss";

function CategoryNav() {
  const categories = [
    {
      text: "Café",
    },
    {
      text: "Té",
    },
    {
      text: "Cafe con Té",
    },
    {
      text: "Especiales MOMO",
    },
    {
      text: "Alimentos",
    },
    {
      text: "Combos",
    },
    {
      text: "Otras Bebidas",
    },
    {
      text: "Nuestra Tienda",
    },
  ];

  return (
    <nav className="cat_nav">
      <ul className="categories">
        {categories.map((category, index) => (
          <li
            className="category"
            key={index}
          >
            <button>{category.text}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CategoryNav;
