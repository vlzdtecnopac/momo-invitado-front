import axios from "axios";
import logo from "../../assets/icons/logo.svg";
import kdsOnIcon from "../../assets/icons/kds-on.svg";
import kioskIcon from "../../assets/icons/kiosko.svg";
import Card from "../../components/Card/Card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useShoppingStore } from "../../store/shopping.store";
import { useEmployeeStore } from "../../store/employee.store";
import { tokenHeader } from "../../helpers/token-header.helper";
import { LoaderPage } from "../../includes/loader/Loader";
import "./WelcomePage.scss";
import LayoutBlank from "../../includes/layout/LayoutBlank";

interface KioskoDataActive {
  name_shopping: string;
  data: {
    id: number;
    kiosko_id: string;
    shopping_id: string;
    state: boolean;
    nombre: string;
    create_at: Date;
    update_at: Date;
  };
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
        }
      };
      fetchDataOnMount();
    }
  }, []);

  useEffect(() => {
    if (!loader) {
      const consult = async () => {
        await fetchStoreData(dataEmployee[0]?.shopping_id);
        const resp = await searchKiosko(dataEmployee[0]?.shopping_id);
        localStorage.setItem('kiosko-momo', resp.data.data.kiosko_id);
        setKioskoActive(resp.data);
        setTimeout(() => navigate("/order-here"), 4000);
      };
      consult();
    }
  }, [loader]);

  const searchKiosko = async (shopping_id: string) => {
    return await axios.get(
      `${
        import.meta.env.VITE_API_URL
      }/kioskos/activate/?shopping_id=${shopping_id}&state=false`,
      { headers: tokenHeader }
    );
  };

  return (
    <LayoutBlank>
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
              {(() => {
                if (kioskoActive != undefined) {
                  return (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      <Card
                        icon={kioskIcon}
                        text={kioskoActive?.data.nombre}
                        subText={kioskoActive?.name_shopping}
                        state={false}
                      />
                    </motion.div>
                  );
                } else {
                  return (
                    <div className="text-not-kiosko">
                      <p>
                        No hay kioskos disponibles, solicita uno con el
                        administrador
                      </p>
                    </div>
                  );
                }
              })()}
            </div>
            <div className="loader"></div>
            <div className="card-group">
              {dataStore.length > 0 &&
                dataStore.map((item: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <Card
                      icon={kdsOnIcon}
                      text={item.name_shopping}
                      subText={`No. ${item.no_shooping}`}
                      state={true}
                    />
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </div>
      </LayoutBlank>
  );
}

export default WelcomePage;
