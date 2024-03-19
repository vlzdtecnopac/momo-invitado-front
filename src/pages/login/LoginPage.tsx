import { useNavigate } from "react-router-dom";
import Login from "../../components/Login/Login";
import { useEffect } from "react";
const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem("token-momo")){
      navigate("/order-here")
    }else{
      localStorage.clear();
    }
  })
  return (
    <div>
      <Login />
    </div>
  );
};
export default LoginPage;
