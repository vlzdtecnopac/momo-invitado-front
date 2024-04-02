import React, { useEffect, useState } from "react";
import { useProductOptionStore } from "../../store/productOption.store";

interface OptionsExtraProps {
  icon: string;
  listOptions: string[];
  attr: string;
  multiple: boolean;
}

const OptionsExtra: React.FC<OptionsExtraProps> = ({
  icon,
  listOptions,
  attr,
  multiple = false,
}) => {
  const { dataProductOption } = useProductOptionStore();
  const setDataProductOption = useProductOptionStore(
    (state) => state.setDataProductOption
  );
  const [valueSelect, setValueSelect] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newArray;
    if (!multiple) {
      setValueSelect([event.target.value]);
    } else {
      if (!event.target.checked) {
        newArray = valueSelect.filter((item) => item !== event.target.value);
      } else {
        newArray = [...valueSelect, event.target.value];
      }
      setValueSelect(newArray);
    }
  };


  useEffect(()=>{
    const updatedData = {
      ...dataProductOption,
      [attr]: valueSelect,
    };
    setDataProductOption(updatedData); 
}, [valueSelect])

  return (
    <div className="extra-list-options">
      <div className="grid grid-noGutter-noBottom">
        <div className="col-2">
          <img className="icon" src={icon} alt="extra" />
        </div>
        <div className="col-10">
          <ul className="list-content-options">
            {listOptions.map((option: string, i) => {
              const isChecked = valueSelect.includes(option);
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
                            checked={isChecked}
                            value={option}
                            type="checkbox"
                            onChange={(e) => {
                              handleCheckboxChange(e);
                            }}
                            name={attr}
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
