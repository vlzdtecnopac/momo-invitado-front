import logo from "../../assets/icons/logo.svg";
import kdsOnIcon from "../../assets/icons/kds-on.svg";
import kioskIcon from "../../assets/icons/kiosko.svg";
import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useShoppingStore } from "../../store/shopping.store";
import { useEmployeeStore } from "../../store/employee.store";

import "./WelcomePage.scss";
import { LoaderPage } from "../../loader/Loader";
import axios from "axios";

function WelcomePage() {
  const navigate = useNavigate();
  const { dataEmployee, fetchEmployeeData } = useEmployeeStore();
  const { dataStore, fetchStoreData } = useShoppingStore();
  const [loader, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    if (loader) {
      const fetchDataOnMount = async () => {
        const employeeId = localStorage.getItem("employee-id");
        if (employeeId) {
          searchKiosko();
          await fetchEmployeeData(employeeId);
          await fetchStoreData(dataEmployee[0]?.shopping_id);
          setIsLoading(false);
          //setTimeout(() => navigate("/order-here"), 4000);
        }
      };
      fetchDataOnMount();
    }
  }, [loader, dataStore]);

  const searchKiosko = async () => {
    const kioskosInactives = await axios.post(`${import.meta.env.VITE_API_URL}/kioskos/?shopping_id=${dataStore[0].shopping_id}&state=false`);
    console.log(kioskosInactives);
  }

  return (
    <>
      {loader ? <LoaderPage /> : ""}
      <div className="component-welcome">
        <div className="logo-container">
          <img className="logo" src={logo} alt="momo-logo" />
        </div>
        <div className="text-container">
          <div className="text">
            <h2 className="big-text">¡Bienvenid@!</h2>
            <p className="sub-text">
              Antes de comenzar, <br />
              Espera que se emparejen <br />
              tus dispositivos.
            </p>
          </div>
        </div>
        <div className="kiosko-loader-container">
          <div className="kiosko-loader">
            <div className="store-card">
              <Card
                icon={kioskIcon}
                text="Kiosko"
                subText="Tienda 1"
                state={false}
              />
            </div>
            <div className="loader"></div>
            <div className="card-group">
              {dataStore.map((item: any, i: number) => (
                <Card
                  key={i}
                  icon={kdsOnIcon}
                  text={item.name_shopping}
                  subText={`No. ${item.no_shooping}`}
                  state={true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
