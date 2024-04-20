import React, { ReactNode, useContext, useEffect, useState } from "react";
import { SocketContext } from "../../context/SocketContext";
import { useNavigate } from "react-router-dom";
import { useEmployeeStore } from "../../store/employee.store";
import { useShoppingStore } from "../../store/shopping.store";
import { LoaderPage } from "../loader/Loader";
import axiosInstance from "../../helpers/axios.helper";

interface DynamicLayoutProps {
  children: ReactNode;
}

const LayoutBlank: React.FC<DynamicLayoutProps> = (props) => {
  const navigate = useNavigate();
  const { socket } = useContext(SocketContext);
  const { fetchEmployeeData } = useEmployeeStore();
  const { dataStore, fetchStoreData } = useShoppingStore();
  const [loading, setIsLoading] = useState<Boolean>(true);
  const employeeId = localStorage.getItem("employee_id");

  useEffect(() => {
    
    window.addEventListener('vite:preloadError', () => {
      window.location.reload()
    })

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
    socket.on("kiosko-verify-socket", (resp: any) => {
      if (dataStore[0]?.shopping_id == resp.shopping_id) {
        if (localStorage.getItem("kiosko-momo") == resp.kiosko_id) {
          localStorage.clear();
          navigate("/");
        }
      }
    });
  }, [loading, socket]);

  return (
    <>
      {loading ? <LoaderPage /> : ""}
      {props.children}
    </>
  );
};

export default LayoutBlank;
