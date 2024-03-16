import React, { ReactNode, useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Layout.scss";
import { SocketContext } from "../../context/SocketContext";
import { useShoppingStore } from "../../store/shopping.store";
import { useEmployeeStore } from "../../store/employee.store";
import { useNavigate } from "react-router-dom";

interface DynamicLayoutProps {
  children: ReactNode;
}

const Layout: React.FC<DynamicLayoutProps> = (props) => {
  const navigate = useNavigate();
  const { socket } = useContext(SocketContext);
  const { dataStore, fetchStoreData } = useShoppingStore();
  const { fetchEmployeeData } = useEmployeeStore();
  const [loading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    if (loading) {
      const fetchDataOnMount = async () => {
        const employeeId = localStorage.getItem("employee-id");
        if (employeeId) {
          fetchEmployeeData(employeeId).then(
            async (resp: any) => {
              await fetchStoreData(resp[0].shopping_id);
              setIsLoading(false);
            }
          );
        }
      };
      fetchDataOnMount();
    }
  }, []);

  useEffect(() => {
    if (!loading) {
      socket.on("kiosko-verify-socket", (resp: any) => {
        if (dataStore[0]?.shopping_id == resp.shopping_id) {
          if(localStorage.getItem('kiosko-momo') == resp.kiosko_id){
              localStorage.removeItem('kiosko-momo');
              localStorage.removeItem('token-momo');
              localStorage.removeItem('employee-id');
              navigate("/");
          }
        }
      });
    }
  }, [loading]);

  return (
    <>
      <Header />
      <div className="col-12_sm-11_md-11_lg-11 layout">{props.children}</div>
    </>
  );
};

export default Layout;
