import React, { ReactNode, useContext, useEffect, useState } from "react";
import moment from "moment";
import { SocketContext } from "../../context/SocketContext";
import { useNavigate } from "react-router-dom";
import { useEmployeeStore } from "../../store/employee.store";
import { useShoppingStore } from "../../store/shopping.store";
import axios from "axios";

interface DynamicLayoutProps {
  children: ReactNode;
}

const LayoutBlank: React.FC<DynamicLayoutProps> = (props) => {
  const navigate = useNavigate();
  const { socket } = useContext(SocketContext);
  const { dataEmployee, fetchEmployeeData } = useEmployeeStore();
  const { dataStore, fetchStoreData } = useShoppingStore();
  const [loading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    let start_session = localStorage.getItem("start_session");
    if(start_session != undefined){
      let currentTime =  moment();
      if (currentTime.diff(start_session, 'hours') >= 1) {
        renewToken(currentTime);
      }
    }
    if (loading) {
      const fetchDataOnMount = async () => {
        const employeeId = localStorage.getItem("employee-id");
        if (employeeId) {
          fetchEmployeeData(employeeId).then(async (resp: any) => {
            await fetchStoreData(resp[0].shopping_id);
            setIsLoading(false);
          });
        }
      };
      fetchDataOnMount();
    }
  }, []);


  const renewToken = async (currentTime: any) => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/update_token`,{
      "id": dataEmployee[0]?.employee_id
  });
   localStorage.setItem("start_session", currentTime.format('YYYY/MM/DD, h:mm:ss a'));
   localStorage.setItem('token-momo', response.data.token);
  }

  useEffect(() => {
    socket.on("kiosko-verify-socket", (resp: any) => {
      if (dataStore[0]?.shopping_id == resp.shopping_id) {
        if (localStorage.getItem("kiosko-momo") == resp.kiosko_id) {
          localStorage.removeItem("kiosko-momo");
          localStorage.removeItem("token-momo");
          localStorage.removeItem("employee-id");
          navigate("/");
        }
      }
    });
  }, [loading, socket]);

  return <>{props.children}</>;
};

export default LayoutBlank;
