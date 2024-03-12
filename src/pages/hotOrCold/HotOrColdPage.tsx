import Layout from "../../includes/layout/Layout";
import "./HotOrColdPage.scss";

function HotOrColdPage() {
  return (
    <>
      <Layout>
        <div className="hot_or_cold">
          <div className="options">
            <div className="center-container">
              <div className="container">
                <div className="options">
                  <button className="custom-btn hot">
                    <span className="icon"></span>
                    <span className="text">Caliente</span>
                  </button>
                  <button className="custom-btn cold">
                    <span className="icon"></span>
                    <span className="text">Frio</span>
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
