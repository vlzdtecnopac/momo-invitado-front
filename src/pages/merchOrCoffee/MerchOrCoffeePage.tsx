import Layout from "../../includes/layout/Layout";
import "./MerchOrCoffeePage.scss";

function HotOrColdPage() {
  return (
    <>
      <Layout>
        <div className="merch_or_coffee">
          <div className="options">
            <div className="center-container">
              <div className="container">
                <div className="options">
                  <button className="custom-btn merch">
                    <span className="icon"></span>
                    <span className="text">Merch</span>
                  </button>
                  <button className="custom-btn coffee-bean">
                    <span className="icon"></span>
                    <span className="text">Café granel</span>
                  </button>
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
