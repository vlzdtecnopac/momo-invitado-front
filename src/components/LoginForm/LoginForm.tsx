import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import moment from "moment";
import { Formik } from "formik";

import axiosInstance from "../../helpers/axios.helper";
import { SocketContext } from "../../context/SocketContext";
import { LoaderPage } from "../../includes/loader/Loader";
import "./LoginForm.scss";

function LoginForm() {
  const navigate = useNavigate();

  const [loader, setLoader] = useState<Boolean>();
  const [error, setError] = useState<String>("");

  const { socket } = useContext(SocketContext);

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("* El correo no es valido.")
      .required("* El correo es requerido."),
    password: Yup.string()
      .min(4, "* La contreseña se encuentra corta")
      .max(10, "* La contraseña se encuentra larga")
      .required("* Ingresa la contraseña"),
  });

  return (
    <>
      {loader ? <LoaderPage /> : ""}
      {error ? <div className="alert-error">{error}</div> : ""}
      <div className="component-login-form">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={SignupSchema}
          onSubmit={async (values) => {
            setLoader(true);
            try {
              let resp = await axiosInstance.post(
                `/users/employee/login`,
                values
              );
              if (resp) {
                if (!resp.data.state) {
                  setError("Usuario Inactivo");
                  return;
                }
                localStorage.setItem(
                  "start_session",
                  moment().format("YYYY/MM/DD, h:mm:ss a")
                );
                localStorage.setItem("token-momo", resp.data.token);
                localStorage.setItem("employee-id", resp.data.employee_id);
                socket.emit("kiosko-socket", {
                  shopping_id: resp.data.shopping_id,
                });
                setLoader(false);
                navigate("/welcome");
              }
            } catch (e: any) {
              setLoader(false);
              setError(e.response.data.msg);
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              noValidate
              className="login-form"
            >
              <div className="form-group">
                <input
                  autoComplete="off"
                  placeholder="Correo Electronico"
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <i className="icon icon-email"></i>
              </div>
              {(() => {
                if (errors.email && touched.email) {
                  return <div className="alert-error">{errors.email}</div>;
                }
              })()}
              <div className="form-group">
                <input
                  autoComplete="off"
                  placeholder="Contraseña"
                  type="password"
                  id="password"
                  name="password"
                  className="input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <i className="icon icon-password"></i>
              </div>
              {(() => {
                if (errors.password && touched.password) {
                  return <div className="alert-error">{errors.password}</div>;
                }
              })()}
              <div className="button-container">
                <button
                  type="submit"
                  className="login-buttom"
                >
                  Ingresar
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default LoginForm;
