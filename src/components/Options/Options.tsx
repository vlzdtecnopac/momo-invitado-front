import { useProductOptionStore } from "../../store/productOption.store";
import "./Options.scss";

interface OptionsProps {
  titleOptions: string;
  optionHandler?: Function;
  listOptions: string[];
  iconOptions: string;
  distanceScrolling?: number;
  price?: string;
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
            <img
              className="icon"
              src={iconOptions}
              alt="size"
            />
            <h3 className="text">{titleOptions}</h3>
          </div>
        </div>
        <div className="col-8">
          <div className="options">
            {listOptions.map((item: string, i: number) => {
              return (
                <button
                  key={i}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation();
                    console.log(attr);
                    if (attr !== undefined) {
                      const updatedData = {
                        ...dataProductOption,
                        [attr]: `${item} $10`,
                      };
                      console.log(updatedData);
                      setDataProductOption(updatedData);
                    }

                    distanceScrolling && optionHandler(distanceScrolling);
                  }}
                  className="option"
                >
                  {item}
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
