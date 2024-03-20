import axios from "axios";
import { motion } from "framer-motion";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as Yup from "yup";

import LayoutBlank from "../../includes/layout/LayoutBlank";
import logoMomo from "../../assets/icons/logo.svg";
import { useLanguage } from "../../context/Langi18nContext";

import { LoaderPage } from "../../loader/Loader";
import { tokenHeader } from "../../helpers/token-header.helper";

import "./CreateAccountPage.scss";

import ClientWelcomeComponent from "../../components/clientWelcome/ClientWelcome";

const CreateAccountSchema = Yup.object().shape({
  firstName: Yup.string().required("El nombre es requerido."),
  lastName: Yup.string().required("El apellido es requerido."),
  phone: Yup.string().required("El número telefónico es requerido."),
  email: Yup.string()
    .email("El correo es invalido.")
    .required("El correo es requerido."),
});

function CreateAccountPage() {
  const [loader, isLoader] = useState<Boolean>();
  const navigate = useNavigate();
  const { translate } = useLanguage();
  const [countries, setCountries] = useState([]);
  const [success, setSuccess] = useState(null);
  const [selectedCountryCode] = useState("+57");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("./src/dummy/listCountry.json");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries data:", error);
      }
    };
    fetchCountries();
  }, []);

  const cancelHandlerRegister = () => navigate("/");

  return (
    <LayoutBlank>
      {loader ? <LoaderPage /> : ""}
      <div className="create-account-page">
        <div className="section-resgister">
          <motion.img
            className="logo-business"
            src={logoMomo}
            alt="logo-momo"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          />
          <motion.h2
            className="title"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            {translate("register")}
          </motion.h2>
          <motion.p
            className="subTitle"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            {translate("enterDataPerson")}
          </motion.p>

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              numberCode: selectedCountryCode,
              phone: "",
              email: "",
            }}
            validationSchema={CreateAccountSchema}
            onSubmit={async (values) => {
              isLoader(true);
              try {
                let selectCountry;
                countries.map((country: any) => {
                  if (country.dial_code == values.numberCode) {
                    selectCountry = country.name;
                  }
                });

                let data = {
                  first_name: values.firstName,
                  last_name: values.lastName,
                  phone: values.phone,
                  code: values.numberCode,
                  email: values.email,
                  country: selectCountry,
                };
            
                const response = await axios.post(
                  `${import.meta.env.VITE_API_URL}/users/client/register`,
                  data,
                  { headers: tokenHeader }
                );
                setSuccess(response.data);
                isLoader(false);
              } catch (e) {
                isLoader(false);
                setSuccess(null);
                console.log(e);
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
                autoComplete="false"
                noValidate
                className="form"
              >
                <div className="section-form">
                  <section className="form-group">
                    <input
                      name="firstName"
                      placeholder={translate("firstName")}
                      type="text"
                      className="input"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                    />
                    <i className="icon-user"></i>
                  </section>
                  {(() => {
                    if (errors.firstName && touched.firstName) {
                      return (
                        <div className="alert-error">{errors.firstName}</div>
                      );
                    }
                  })()}
                  <section className="form-group">
                    <input
                      name="lastName"
                      placeholder={translate("lastName")}
                      type="text"
                      className="input"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                    />
                    <i className="icon-user"></i>
                  </section>
                  {(() => {
                    if (errors.lastName && touched.lastName) {
                      return (
                        <div className="alert-error">{errors.lastName}</div>
                      );
                    }
                  })()}
                  <div className="grid-2_xs-2">
                    <div className="col-3" style={{ padding: "0px 5px" }}>
                      <select
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="numberCode"
                        className="select"
                      >
                        {countries &&
                          countries.length > 0 &&
                          countries.map((country: any, index: number) => (
                            <option
                              key={index}
                              selected={
                                selectedCountryCode === country.dial_code
                              }
                            >
                              {country.dial_code}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="col-9" style={{ padding: "0px 8px" }}>
                      <section className="form-group">
                        <input
                          name="phone"
                          placeholder="Número Telefonico"
                          type="number"
                          className="input"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phone}
                        />
                        <i className="icon-phone"></i>
                      </section>
                    </div>
                    {(() => {
                      if (errors.phone && touched.phone) {
                        return (
                          <div className="alert-error">{errors.phone}</div>
                        );
                      }
                    })()}
                  </div>
                  <section className="form-group">
                    <input
                      name="email"
                      placeholder={translate("email")}
                      type="email"
                      className="input"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <i className="icon-email"></i>
                  </section>
                  {(() => {
                    if (errors.email && touched.email) {
                      return <div className="alert-error">{errors.email}</div>;
                    }
                  })()}
                  <div className="term-condition">
                    <label>
                      <input type="checkbox" name="check" />
                      <span className="custom-checkbox"></span>
                    </label>
                    <Link className="link_term" to={`/`}>
                      {translate("acceptTerms")}
                    </Link>
                  </div>
                </div>
                <div className="grid-3_xs-1">
                  <div className="col-6">
                    <button
                      onClick={() => cancelHandlerRegister()}
                      className="btn-cancelar"
                    >
                      {translate("cancelRegister")}
                    </button>
                  </div>
                  <div className="col-6">
                    <button type="submit" className="btn-register">
                      {translate("register")}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
      {success !== null  && <ClientWelcomeComponent data={success}/>}
    </LayoutBlank>
  );
}

export default CreateAccountPage;
