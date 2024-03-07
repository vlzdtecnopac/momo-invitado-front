import React, { useState } from "react";
import "./SideBar.scss";
import { Link, useLocation } from "react-router-dom";

function SideBar() {
  const [selectedOption, setSelectedOption] = useState("");
  const location = useLocation();

  console.log(location);
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const sidebarListNav = [
    { icon: "orders-icon", name: "orders", router: "/dashboard" },
    { icon: "inventory-icon", name: "inventory", router: "/inventory-page" },
    { icon: "alert-icon", name: "alert", router: "/alerts-page" },
    { icon: "config-icon", name: "config", router: "/config-page" },
  ];

  return (
    <>
      <ul className="options__menu">
        {sidebarListNav.map((item, index) => (
          <li
            className={`option ${
              location.pathname == item.router ? "active" : ""
            }`}
            onClick={() => handleOptionClick(item.name)}
            key={index}
          >
            <Link to={item.router}>
              <i
                className={`icon ${
                  location.pathname === item.router ? "active" : ""
                } ${item.icon}`}
              ></i>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to="#"
        className="logout"
        onClick={() => handleOptionClick("logout")}
      >
        <Link to="../login">
          <i className="logout-icon"></i>
        </Link>
      </Link>
    </>
  );
}

export default SideBar;
