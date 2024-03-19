import { Link } from "react-router-dom";
import Layout from "../../includes/layout/Layout";
import { useLanguage } from "../../context/Langi18nContext";
import "./HotOrColdPage.scss";

function HotOrColdPage() {
  const { translate } = useLanguage();

  return (
    <>
      <Layout>
        <div className="hot_or_cold">
          <div className="options">
            <div className="center-container">
              <div className="container">
                <div className="options">
                  <Link to="../products">
                    <button className="custom-btn hot">
                      <span className="icon"></span>
                      <span className="text"> {translate("hot")}</span>
                    </button>
                  </Link>

                  <Link to="../products">
                    <button className="custom-btn cold">
                      <span className="icon"></span>
                      <span className="text"> {translate("cold")}</span>
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
