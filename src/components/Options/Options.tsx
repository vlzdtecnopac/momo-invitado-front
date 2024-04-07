import React, { useEffect } from "react";
import { useProductOptionStore } from "../../store/productOption.store";
import "./Options.scss";

interface OptionsProps {
  titleOptions: string;
  optionHandler?: Function;
  price?: string[];
  listOptions: string[];
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
  price = [],
}) => {
  const { dataProductOption } = useProductOptionStore();
  const setDataProductOption = useProductOptionStore(
    (state) => state.setDataProductOption
  );

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
            {listOptions.map((item: string, i: number) => {
              let postion = Object.keys(dataProductOption).indexOf(attr);
              return (
                <button
                  className={
                    Object.values(dataProductOption)[postion] == item
                      ? `option-active`
                      : `option`
                  }
                  key={i}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation();
                    if (attr !== undefined) {
                      const updatedData = {
                        ...dataProductOption,
                        [attr]: `${item}`,
                      };
                      setDataProductOption(updatedData);
                    }
                    if (optionHandler !== undefined) {
                      distanceScrolling && optionHandler(distanceScrolling);
                    }
                  }}
                >
                  {item}
                  {price[i] && <h4 className="extra-price">${price[i]}</h4>}
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
