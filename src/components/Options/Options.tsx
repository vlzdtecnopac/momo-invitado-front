import { useLanguage } from "../../context/Langi18nContext";
import "./Options.scss";

interface OptionsProps {
  titleOptions: String;
  optionHandler?: Function;
  listOptions: String[];
  iconOptions: string;
  distanceScrolling?: number;
}

const Options: React.FC<OptionsProps> = ({
  titleOptions,
  optionHandler,
  listOptions,
  iconOptions,
  distanceScrolling,
}) => {
  const { translate } = useLanguage();
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
            {listOptions.map((item: String, i: number) => {
              return (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    distanceScrolling && optionHandler(distanceScrolling);
                  }}
                  className="option"
                >
                  {item} <span className="extra-price">$10</span>
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
