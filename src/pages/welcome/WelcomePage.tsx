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
import { tokenHeader } from "../../helpers/token-header.helper";

interface KioskoDataActive {
  id: number;
  kiosko_id: string;
  shopping_id: string;
  state: boolean;
  nombre: string;
  create_at: Date;
  update_at: Date;
}

function WelcomePage() {
  const navigate = useNavigate();
  const { dataEmployee, fetchEmployeeData } = useEmployeeStore();
  const { dataStore, fetchStoreData } = useShoppingStore();
  const [kioskoActive, setKioskoActive] = useState<KioskoDataActive>();
  const [loader, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    if (loader) {
      const fetchDataOnMount = async () => {
        const employeeId = localStorage.getItem("employee-id");
        if (employeeId) {
          await fetchEmployeeData(employeeId);
          setIsLoading(false);
          //setTimeout(() => navigate("/order-here"), 4000);
        }
      };
      fetchDataOnMount();
    }
  }, []);

  useEffect(() => {
    if (!loader) {
      const consult = async () => {
        await fetchStoreData(dataEmployee[0]?.shopping_id);
        await searchKiosko(dataEmployee[0]?.shopping_id);
      };
      consult();
    }
  }, [loader]);

  const searchKiosko = async (shopping_id: string) => {
    const responseKiosko: KioskoDataActive = await axios.get(
      `${
        import.meta.env.VITE_API_URL
      }/kioskos/activate/?shopping_id=${shopping_id}&state=false`,
      { headers: tokenHeader }
    );
    setKioskoActive(responseKiosko);
  };

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
                text={kioskoActive?.nombre}
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
