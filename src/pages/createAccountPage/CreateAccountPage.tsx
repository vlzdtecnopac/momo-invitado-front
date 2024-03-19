import { motion } from "framer-motion";
import LayoutBlank from "../../includes/layout/LayoutBlank";
import logoMomo from "../../assets/icons/logo.svg";
import "./CreateAccountPage.scss";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/Langi18nContext";
import { useEffect, useState } from "react";

function CreateAccountPage() {
  const { translate } = useLanguage();
  const [countries, setCountries] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+57");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('./src/dummy/listCountry.json');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries data:', error);
      }
    };
    fetchCountries();
  }, []); 


  return (
    <LayoutBlank>
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

          <form autoComplete="false" className="form">
            <div className="section-form">
              <section className="form-group">
                <input
                  name="nombre"
                  placeholder={translate("name")}
                  type="text"
                  className="input"
                />
                <i className="icon-user"></i>
              </section>
              <section className="form-group">
                <input
                  name="apellido"
                  placeholder={translate("lastName")}
                  type="text"
                  className="input"
                />
                <i className="icon-user"></i>
              </section>
              <div className="grid-2_xs-2">
                <div className="col-3" style={{ padding: "0px 5px" }}>
                  <select className="select">
                    {countries && countries.length > 0 && countries.map((country: any, index: number)=> (<option  key={index} selected={selectedCountryCode === country.dial_code} >{country.dial_code}</option>))}
                  </select>
                </div>
                <div className="col-9" style={{ padding: "0px 8px" }}>
                  <input
                    name="email"
                    placeholder="Número Telefonico"
                    type="email"
                    className="input"
                  />
                </div>
              </div>
              <section className="form-group">
                <input
                  name="email"
                  placeholder={translate("email")}
                  type="email"
                  className="input"
                />
                <i className="icon-email"></i>
              </section>
              <div className="term-condition">
                <label>
                  <input type="checkbox" name="check" />
                  <span className="custom-checkbox"></span>
                </label>
                <Link className="link_term" to={`/`}>
                {translate("accepTerm")}
                </Link>
              </div>
            </div>
            <div className="grid-3_xs-1">
              <div className="col-6">
                <button className="btn-cancelar">
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
        </div>
      </div>
    </LayoutBlank>
  );
}

export default CreateAccountPage;
