import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import ProductCard from "../../components/ProductCard/ProductCard";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import Layout from "../../includes/layout/Layout";
import no_found from "../../assets/no-found.png";
import "./ProductsPage.scss";

import axiosInstance from "../../helpers/axios.helper";

function ProductsPage() {
  const { category, type } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsToteat();
  }, [category]);

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
                image = no_found;
              } else {
                image = product.image.replace(/\{"/g, "").replace(/\"}/g, "");
              }
              return (
                <motion.div key={product.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
                className="col-3_lg-3_md-3_sm-4_xs-6">
                  <ProductCard
                    id={product.product_id}
                    img={image}
                    price={product.price}
                    name={product.name_product}
                    type={type}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default ProductsPage;
