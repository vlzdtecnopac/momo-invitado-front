import ProductCard from "../../components/ProductCard/ProductCard";
import product from "../../assets/product.jpg";
import "./ProductsPage.scss";
import Layout from "../../includes/layout/Layout";
import CategoryNav from "../../components/CategoryNav/CategoryNav";

function ProductsPage() {
  return (
    <Layout>
      <CategoryNav />
      <div className="products_page grid-4_md-3_sm-2">
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
    </Layout>
  );
}
export default ProductsPage;
