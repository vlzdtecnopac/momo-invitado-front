import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../../includes/layout/Layout";
import { useLanguage } from "../../context/Langi18nContext";
import "./HotOrColdPage.scss";

function HotOrColdPage() {
  const { translate } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (option: string) => {
  
    if (location.pathname === "/hot-or-cold/cafe") {
      navigate(`/products/Cafe/${option}`);
    }
    if (location.pathname === "/hot-or-cold/te") {
      navigate(`/products/Te/${option}`);
    }
    if (location.pathname === "/hot-or-cold/cafe%20con%20te") {
      navigate(`/products/Café con Té/${option}`);
    }
    if (location.pathname === "/hot-or-cold/especiales%20MOMO") {
      navigate(`/products/MOMO%20Specials/${option}`);
    }
  };

  return (
    <>
      <Layout>
        <div className="hot_or_cold">
          <div className="options">
            <div className="center-container">
              <div className="container">
                <div className="options">
                  <button
                    onClick={() => handleClick("hot")}
                    className="custom-btn hot"
                  >
                    <span className="icon"></span>
                    <span className="text"> {translate("hot")}</span>
                  </button>

                  <button
                    className="custom-btn cold"
                    onClick={() => handleClick("cold")}
                  >
                    <span className="icon"></span>
                    <span className="text"> {translate("cold")}</span>
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
