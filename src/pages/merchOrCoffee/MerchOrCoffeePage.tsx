import { Link } from "react-router-dom";
import Layout from "../../includes/layout/Layout";
import { useLanguage } from "../../context/Langi18nContext";
import "./MerchOrCoffeePage.scss";

function HotOrColdPage() {
  const { translate } = useLanguage();

  return (
    <>
      <Layout>
        <div className="merch_or_coffee">
          <div className="options">
            <div className="center-container">
              <div className="container">
                <div className="options">
                  <Link to="../products/Tienda">
                    <button className="custom-bt merch">
                      <span className="icon"></span>
                      <span className="text">Merch</span>
                    </button>
                  </Link>
                  <Link to="../products/Tienda">
                    <button className="custom-bt coffee-bean">
                      <span className="icon"></span>
                      <span className="text">{translate("bulkCoffee")}</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default HotOrColdPage;
