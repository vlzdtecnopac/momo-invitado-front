import React from "react";
import { useLanguage } from "../../context/Langi18nContext";

interface OptionsExtraProps {
  icon: string;
  listOptions: string[]
}

const OptionsExtra: React.FC<OptionsExtraProps> = ({ icon, listOptions }) => {
  const { translate } = useLanguage();

  return (
    <div className="extra-list-options">
      <div className="grid grid-noGutter-noBottom">
        <div className="col-2">
          <img className="icon" src={icon} alt="extra" />
        </div>
        <div className="col-10">
          <ul className="list-content-options">
            {listOptions.map((option: string )=> {
                return (  <li>
                    <div className="grid grid-noGutter-noBottom">
                      <div className="col-9">
                        <p className="text">{option}</p>
                      </div>
                      <div className="col-3">
                        <span className="extra">
                          <label>
                            <input name="green" type="checkbox" />
                            <span className="custom-checkbox"></span>
                          </label>
                        </span>
                      </div>
                    </div>
                  </li>);
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OptionsExtra;
