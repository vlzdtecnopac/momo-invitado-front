import React, { ReactNode, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Header from "../Header/Header";
import { SocketContext } from "../../context/SocketContext";
import { useShoppingStore } from "../../store/shopping.store";
import { useEmployeeStore } from "../../store/employee.store";

import "./Layout.scss";
import axios from "axios";
import { LoaderPage } from "../loader/Loader";

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

  const renewToken = async (currentTime: any) => {
   
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/update_token`,{
      "id": employeeId
  });
   localStorage.setItem("start_session", currentTime.format('YYYY/MM/DD, h:mm:ss a'));
   localStorage.setItem('token-momo', response.data.token);
   window.location.reload();
  }

  return (
    <>
      {loading? <LoaderPage/> : ""}
      <Header />
      <div className="col-12_sm-12_md-12_lg-12 p-0">{props.children}</div>
    </>
  );
};

export default Layout;
