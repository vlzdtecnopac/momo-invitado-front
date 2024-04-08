import React, { useEffect, useState } from "react";
import { OptionData, useProductOptionStore } from "../../store/productOption.store";
import "./Options.scss";

interface OptionsProps {
  titleOptions: string;
  optionHandler?: Function;
  price?: string;
  defaultValue?: OptionData;
  listOptions: OptionData[];
  iconOptions: string;
  distanceScrolling?: number;
  attr: string;
}

const Options: React.FC<OptionsProps> = ({
  titleOptions,
  optionHandler,
  listOptions,
  iconOptions,
  distanceScrolling,
  attr,
  price,
  defaultValue = {
    name: "",
    price: 0
  },
}) => {
  const { dataProductOption } = useProductOptionStore();
  const [getDefault, setDetault] = useState<OptionData>(defaultValue);
  const setDataProductOption = useProductOptionStore(
    (state) => state.setDataProductOption
  );

  useEffect(() => {
    if (defaultValue) {
      const updatedData = {
        ...dataProductOption,
        [attr]: defaultValue,
      };
      console.log(defaultValue);
      setDataProductOption(updatedData);
    }
  }, []);

  const selectHandleValueOption = (item: OptionData, attr: string) => {
    const updatedData = {
      ...dataProductOption,
      [attr]: item,
    };
    setDetault({name: item.name, price: item.price});
    setDataProductOption(updatedData);
  };
  return (
    <div className="options-component">
      <div className="grid-middle grid-noGutter-noBottom">
        <div className="col-4">
          <div className="size">
            <img className="icon" src={iconOptions} alt="size" />
            <h3 className="text">{titleOptions}</h3>
          </div>
        </div>
        <div className="col-8">
          <div className="options">
            {listOptions.map((item: OptionData, i: number) => {
              let postion = Object.keys(dataProductOption).indexOf(attr);
              return (
                <button
                  className={
                    Object.values(dataProductOption)[postion].name == item.name ||
                    getDefault.name == item.name
                      ? `option-active`
                      : `option`
                  }
                  key={i}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation();
                    if (attr !== undefined) {
                      selectHandleValueOption(item, attr);
                    }
                    if (optionHandler !== undefined) {
                      distanceScrolling && optionHandler(distanceScrolling);
                    }
                  }}
                >
                  {item.name}
                  {price && <h4 className="extra-price">${price}</h4>}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
