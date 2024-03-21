import React, { ReactNode, useContext, useEffect, useState } from "react";
import moment from "moment";
import { SocketContext } from "../../context/SocketContext";
import { useNavigate } from "react-router-dom";
import { useEmployeeStore } from "../../store/employee.store";
import { useShoppingStore } from "../../store/shopping.store";
import axios from "axios";
import { LoaderPage } from "../loader/Loader";

interface DynamicLayoutProps {
  children: ReactNode;
}

const LayoutBlank: React.FC<DynamicLayoutProps> = (props) => {
  const navigate = useNavigate();
  const { socket } = useContext(SocketContext);
  const { fetchEmployeeData } = useEmployeeStore();
  const { dataStore, fetchStoreData } = useShoppingStore();
  const [loading, setIsLoading] = useState<Boolean>(true);
  const employeeId = localStorage.getItem("employee-id");
  const start_session = localStorage.getItem("start_session");
  useEffect(() => {
    if(start_session){
      let currentTime =  moment();
      if (currentTime.diff(start_session, 'hours') >= 1) {
        renewToken(currentTime);
      }
    }else if (loading) {
      const fetchDataOnMount = async () => {
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
      "id": employeeId
  });
   localStorage.setItem("start_session", currentTime.format('YYYY/MM/DD, h:mm:ss a'));
   localStorage.setItem('token-momo', response.data.token);
   window.location.reload();
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

  return <>
  {loading? <LoaderPage/> : ""}
  {props.children}</>;
};

export default LayoutBlank;
