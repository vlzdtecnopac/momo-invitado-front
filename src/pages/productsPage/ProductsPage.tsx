import ProductCard from "../../components/ProductCard/ProductCard";
import product from "../../assets/product.jpg";
import "./ProductsPage.scss";

function ProductsPage() {
  return (
    <div className="products_page grid-4">
      <div className="col container">
        <ProductCard
          img={product}
          price="30"
          name="Macadamia Black Tea Soda"
        />
      </div>
      <div className="col container">
        <ProductCard
          img={product}
          price="30"
          name="Macadamia Black Tea Soda"
        />
      </div>
      <div className="col container">
        <ProductCard
          img={product}
          price="30"
          name="Macadamia Black Tea Soda"
        />
      </div>
      <div className="col container">
        <ProductCard
          img={product}
          price="30"
          name="Macadamia Black Tea Soda"
        />
      </div>
      <div className="col container">
        <ProductCard
          img={product}
          price="30"
          name="Macadamia Black Tea Soda"
        />
      </div>
      <div className="col container">
        <ProductCard
          img={product}
          price="30"
          name="Macadamia Black Tea Soda"
        />
      </div>
      <div className="col container">
        <ProductCard
          img={product}
          price="30"
          name="Macadamia Black Tea Soda"
        />
      </div>
      <div className="col container">
        <ProductCard
          img={product}
          price="30"
          name="Macadamia Black Tea Soda"
        />
      </div>
    </div>
  );
}
export default ProductsPage;
