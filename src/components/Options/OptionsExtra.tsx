import React, { useEffect, useState } from "react";
import { OptionData, useProductOptionStore } from "../../store/productOption.store";

interface OptionsExtraProps {
  icon: string;
  listOptions: OptionData[];
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
  const [valueSelect, setValueSelect] = useState<OptionData[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let result = JSON.parse(event.target.value);
    if (!multiple) {
      setValueSelect([result]);
      return;
    } else {
      if (event.target.checked) {
        setValueSelect([...valueSelect, result]);
      }
      if (!event.target.checked) {
        if (valueSelect.length > 0) {
          const positionActual = valueSelect.findIndex(
            (item:any) => item.name == result.name
          );

          const multipleArray = valueSelect.splice(positionActual, 0);
          setValueSelect([...multipleArray]);
        }
      }
    }
  };


  useEffect(() => {
    const updatedData = {
      ...dataProductOption,
      [attr]: valueSelect,
    };
    setDataProductOption(updatedData);
  }, [valueSelect]);

  return (
    <div className="extra-list-options">
      <div className="grid grid-noGutter-noBottom">
        <div className="col-2">
          <img className="icon" src={icon} alt="extra" />
        </div>
        <div className="col-10">
          <ul className="list-content-options">
            {listOptions.map((option: OptionData, i) => {
              const isChecked = valueSelect.filter(
                (item: any) => item.name == option.name
              ).length;
              return (
                <li key={i}>
                  <div className="grid grid-noGutter-noBottom">
                    <div className="col-9">
                      <p className="text">{option.name}</p>
                    </div>
                    <div className="col-3">
                      <span className="extra">
                        <label>
                          <input
                            checked={isChecked > 0}
                            value={JSON.stringify({
                              name: `${option.name}`
                            })}
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
