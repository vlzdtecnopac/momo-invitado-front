import React, { useEffect, useState } from "react";
import "./Options.scss";
import { useProductOptionStore } from "../../store/productOption.store";

interface OptionsListProps {
  optionHandler?: Function;
  listOptions: string[];
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
  multiple = false
}) => {
  const { dataProductOption } = useProductOptionStore();
  const setDataProductOption = useProductOptionStore(
    (state) => state.setDataProductOption
  );
  const [valueSelect, setValueSelect] = useState<string[]>([]);
 
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newArray;
    if(!multiple){
      setValueSelect([event.target.value]);
    }else{
      if (!event.target.checked) {
        newArray = valueSelect.filter(item => item !== event.target.value);
      }else{
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
    <div className="extra-options-list">
      <img className="icon" src={iconOptions} alt="extra" />
      <ul className="options-container-list">
        {listOptions.map((option: any, i: number) => {
           const isChecked = valueSelect.includes(`${option} $10`);

          return (
            <li key={i}>
              <div className="grid-middle grid-noGutter-equalHeight">
                <div
                  className="col-9"
                  dangerouslySetInnerHTML={{ __html: option }}
                ></div>
                <div className="col-3">
                  <span className="extra">
                    <p>$10</p>
                    <label>
                      <input
                        checked={isChecked}
                        value={`${option} $10`}
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
