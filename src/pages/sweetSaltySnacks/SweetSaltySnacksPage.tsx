import Layout from "../../includes/layout/Layout";
import "./SweetSaltySnacksPage.scss";

function HotOrColdPage() {
  return (
    <>
      <Layout>
        <div className="hot_or_cold">
          <div className="options">
            <div className="center-container">
              <div className="container">
                <div className="options">
                  <button className="custom-btn sweet">
                    <span className="icon"></span>
                    <span className="text">Dulce</span>
                  </button>
                  <button className="custom-btn salty">
                    <span className="icon"></span>
                    <span className="text">Salado</span>
                  </button>
                  <button className="custom-btn snacks">
                    <span className="icon"></span>
                    <span className="text">Snacks</span>
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
