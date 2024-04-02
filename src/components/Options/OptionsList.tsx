import React from "react";
import "./Options.scss";

interface OptionsListProps {
  optionHandler?: Function;
  listOptions: string[];
  iconOptions: string;
  distanceScrolling?: number;
  attr: string
}

const OptionsList: React.FC<OptionsListProps> = ({
  optionHandler,
  listOptions,
  iconOptions,
  distanceScrolling,
  attr
}) => {

  const disableCheck = () => {

  }
  return (
    <div className="extra-options-list">
      <img
        className="icon"
        src={iconOptions}
        alt="extra"
      />
      <ul className="options-container-list">
        {listOptions.map((option: any, i: number) => {
          return (
            <li key={i}>
              <div className="grid-middle grid-noGutter-equalHeight">
                <div
                  className="col-9"
                  dangerouslySetInnerHTML={{ __html: option }}
                ></div>
                <div className="col-3">
                  <span className="extra">
                    <p>10$</p>
                    <label>
                      <input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          e.stopPropagation();
                          const checkboxes = document.querySelectorAll(`input[name="${attr}"]'`);
                          if(optionHandler !== undefined){
                            distanceScrolling && optionHandler(distanceScrolling)
                          }
                        }}
                        name="10"
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
  );
};
export default OptionsList;
