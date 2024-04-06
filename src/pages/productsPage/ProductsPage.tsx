import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ProductCard from "../../components/ProductCard/ProductCard";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import Layout from "../../includes/layout/Layout";
import "./ProductsPage.scss";


import axiosInstance from "../../helpers/axios.helper";

function ProductsPage() {
  const { category } = useParams();
  console.log(category);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProductsToteat();
  }, []);

  const getProductsToteat = async () => {
    let response = await axiosInstance.get(`/product/?categorys=${category}`);
    setProducts(response.data);
  };

  return (
    <Layout>
      <div className="products_category">
        <CategoryNav />
      </div>
      <div className="products_page">
        <div className="container-product">
          <div className="grid-4_lg-4_md-3_sm-3_xs-2">
            {products.map((product: any) => {
              let image;
              if (product.image == "{}") {
                image = "http://via.placeholder.com/250x250";
              } else {
                image = product.image
                  .replace(/\{"/g, "")
                  .replace(/\"}/g, "");
              }
              return (
                <div key={product.id} className="col-3_lg-3_md-3_sm-4_xs-6">
                  <ProductCard
                    img={image}
                    price="30"
                    name={product.name_product}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default ProductsPage;
