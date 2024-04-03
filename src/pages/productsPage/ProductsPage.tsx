import ProductCard from "../../components/ProductCard/ProductCard";
import product from "../../assets/product1.jpg";

import Layout from "../../includes/layout/Layout";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import "./ProductsPage.scss";

function ProductsPage() {
  return (
    <Layout>
      <div className="products_category">
        <CategoryNav />
      </div>
      <div className="products_page">
        <div className="container-product">
          <div className="grid-4 ">
            <div className="col">
              <ProductCard
                img={product}
                price="30"
                name="Macadamia Black Tea Soda"
              />
            </div>
            <div className="col">
              <ProductCard
                img={product}
                price="30"
                name="Macadamia Black Tea Soda"
              />
            </div>
            <div className="col">
              <ProductCard
                img={product}
                price="30"
                name="Macadamia Black Tea Soda"
              />
            </div>
            <div className="col">
              <ProductCard
                img={product}
                price="30"
                name="Macadamia Black Tea Soda"
              />
            </div>
            <div className="col">
              <ProductCard
                img={product}
                price="30"
                name="Macadamia Black Tea Soda"
              />
            </div>
            <div className="col">
              <ProductCard
                img={product}
                price="30"
                name="Macadamia Black Tea Soda"
              />
            </div>
            <div className="col">
              <ProductCard
                img={product}
                price="30"
                name="Macadamia Black Tea Soda"
              />
            </div>
            <div className="col">
              <ProductCard
                img={product}
                price="30"
                name="Macadamia Black Tea Soda"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default ProductsPage;
