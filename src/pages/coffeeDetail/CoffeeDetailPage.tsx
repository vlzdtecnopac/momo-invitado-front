import ProductCardDetail from "../../components/ProductCardDetail/ProductCardDetail";
import product from "../../assets/product4.jpg";
import coffeeBag from "../../assets/icons/coffee_bag.svg";
import Layout from "../../includes/layout/Layout";
import beans from "../../assets/icons/coffee_beans.svg";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import Slider from "../../components/Slider/Slider";
import "./CoffeeDetailPage.scss";

function CoffeeDetailPage() {
  return (
    <Layout>
      <CategoryNav />
      <div className="page-container">
        <div className="coffee_detail">
          <div className="grid-2">
            <div className="col-3 img-col">
              <ProductCardDetail
                img={product}
                name="Café MOMO"
                description="Café MOMO"
              />
            </div>
            <div className="col-9 details-col detail-card">
              <div className="details">
                <div className="type">
                  <div className=" type-container container">
                    <img
                      className="icon"
                      src={beans}
                      alt="type"
                    />
                    <h3 className="text">Tipo de café</h3>
                  </div>

                  <div className="options">
                    <button className="option">Molido</button>
                    <button className="option">En grano</button>
                  </div>
                </div>
                <hr className="separator" />

                <div className="size">
                  <div className=" size-container container">
                    <img
                      className="icon"
                      src={coffeeBag}
                      alt="size"
                    />
                    <h3 className="text">Tamaño</h3>
                  </div>
                  <div className="options">
                    <button className="option">
                      Chico <br /> <span className="extra-price">250gr</span>
                    </button>
                    <button className="option">
                      Mediano <br /> <span className="extra-price">500gr</span>
                    </button>
                    <button className="option">
                      Grande <br />
                      <span className="extra-price">1Kg</span>
                    </button>
                  </div>
                </div>
                <hr className="separator" />
                <div className="complement">
                  <h3 className="text complement_title">Acompaña tu compra</h3>
                  <div className="cards">
                    <Slider />
                  </div>
                </div>

                <hr className="separator" />

                <div className="btn-container">
                  <button className="add-cart-btn">
                    Agregar al carrito $47
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default CoffeeDetailPage;
