import React, { useEffect, useState } from "react";
import "./Options.scss";
import {
  OptionData,
  useProductOptionStore,
} from "../../store/productOption.store";

interface OptionsListProps {
  optionHandler?: (e: any) => any;
  listOptions: OptionData[];
  iconOptions: string;
  distanceScrolling?: number;
  attr: string;
  multiple: boolean;
}

const OptionsList: React.FC<OptionsListProps> = ({
  optionHandler,
  listOptions,
  iconOptions,
  distanceScrolling,
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
            (item) => item.name == result.name
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
    <div className="extra-options-list">
      <img className="icon" src={iconOptions} alt="extra" />
      <ul className="options-container-list">
        {listOptions.map((option: OptionData, i: number) => {
          const isChecked = valueSelect.filter(
            (item) => item.name == option.name
          ).length;
          return (
            <li style={{ margin: "10px 0px" }} key={i}>
              <div className="grid-middle grid-noGutter-equalHeight">
                <div
                  className="col-9"
                  dangerouslySetInnerHTML={{ __html: option.name! }}
                ></div>
                <div className="col-3">
                  <span className="extra">
                    <p>$ {option.price}</p>
                    <label>
                      <input
                        checked={isChecked > 0}
                        value={JSON.stringify({
                          name: `${option.name}`,
                          price: `${option.price}`,
                        })}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          e.stopPropagation();
                          handleCheckboxChange(e);
                          if (optionHandler !== undefined) {
                            distanceScrolling &&
                              optionHandler(distanceScrolling);
                          }
                        }}
                        name={attr}
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
