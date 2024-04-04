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
          <div className="grid-4_lg-4_md-3_sm-3_xs-2">
            <div className="col-3_lg-3_md-3_sm-4_xs-6">
              <ProductCard
                img={product}
                price="30"
                name="Macadamia Black Tea Soda"
              />
            </div>
            <div className="col-3_lg-3_md-3_sm-4_xs-6">
              <ProductCard
                img={product}
                price="30"
                name="Macadamia Black Tea Soda"
              />
            </div>
            <div className="col-3_lg-3_md-3_sm-4_xs-6">
              <ProductCard
                img={product}
                price="30"
                name="Macadamia Black Tea Soda"
              />
            </div>
            <div className="col-3_lg-3_md-3_sm-4_xs-6">
              <ProductCard
                img={product}
                price="30"
                name="Macadamia Black Tea Soda"
              />
            </div>
            <div className="col-3_lg-3_md-3_sm-4_xs-6">
              <ProductCard
                img={product}
                price="30"
                name="Macadamia Black Tea Soda"
              />
            </div>
            <div className="col-3_lg-3_md-3_sm-4_xs-6">
              <ProductCard
                img={product}
                price="30"
                name="Macadamia Black Tea Soda"
              />
            </div>
            <div className="col-3_lg-3_md-3_sm-4_xs-6">
              <ProductCard
                img={product}
                price="30"
                name="Macadamia Black Tea Soda"
              />
            </div>
            <div className="col-3_lg-3_md-3_sm-4_xs-6">
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
