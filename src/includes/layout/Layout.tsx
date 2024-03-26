import React, { ReactNode, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { SocketContext } from "../../context/SocketContext";
import { useShoppingStore } from "../../store/shopping.store";
import { useEmployeeStore } from "../../store/employee.store";
import { LoaderPage } from "../loader/Loader";
import "./Layout.scss";
import axiosInstance from "../../helpers/axios.helper";


interface DynamicLayoutProps {
  children: ReactNode;
}

const Layout: React.FC<DynamicLayoutProps> = (props) => {
  const navigate = useNavigate();
  const { socket } = useContext(SocketContext);
  const { dataStore, fetchStoreData } = useShoppingStore();
  const { fetchEmployeeData } = useEmployeeStore();
  const [loading, setIsLoading] = useState<Boolean>(true);
  const employeeId = localStorage.getItem("employee-id");

  useEffect(() => {
    const fetchDataOnMount = async () => {
      const kiosko = await axiosInstance.post("/kioskos/verify", {
        kiosko_id: localStorage.getItem("kiosko-momo"),
      });
      if (!kiosko.data[0].state) {
        localStorage.clear();
      }
      if (employeeId) {
        fetchEmployeeData(employeeId).then(async (resp: any) => {
          await fetchStoreData(resp[0].shopping_id);
          setIsLoading(false);
        });
      }
    };
    fetchDataOnMount();
  }, []);

  useEffect(() => {
   if (loading) {
      const fetchDataOnMount = async () => {
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
      {loading? <LoaderPage/> : ""}
      <Header />
      <div className="col-12_sm-12_md-12_lg-12 p-0">{props.children}</div>
    </>
  );
};

export default Layout;
