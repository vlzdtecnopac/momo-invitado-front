import React from "react";

interface OptionsExtraProps {
  icon: string;
  listOptions: string[];
}

const OptionsExtra: React.FC<OptionsExtraProps> = ({ icon, listOptions }) => {
 
  return (
    <div className="extra-list-options">
      <div className="grid grid-noGutter-noBottom">
        <div className="col-2">
          <img
            className="icon"
            src={icon}
            alt="extra"
          />
        </div>
        <div className="col-10">
          <ul className="list-content-options">
            {listOptions.map((option: string, i) => {
              return (
                <li key={i}>
                  <div className="grid grid-noGutter-noBottom">
                    <div className="col-9">
                      <p className="text">{option}</p>
                    </div>
                    <div className="col-3">
                      <span className="extra">
                        <label>
                          <input
                            name="green"
                            type="checkbox"
                          />
                          <span className="custom-checkbox"></span>
                        </label>
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OptionsExtra;
