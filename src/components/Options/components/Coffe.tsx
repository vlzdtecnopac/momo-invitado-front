import { useRef } from "react";
import glass from "/assets/icons/glass.svg";
import milk from "/assets/icons/bottle.svg";
import sugar from "/assets/icons/sugar.svg";
import extra from "/assets/icons/extra.svg";
import lid from "/assets/icons/lid.svg";
import { useLanguage } from "../../../context/Langi18nContext";
import Options from "../Options";
import OptionsList from "../OptionsList";
import "../Options.scss";

interface CoffeProps {
  optionHandler: (e: any) => any;
}

const Coffe: React.FC<CoffeProps> = ({ optionHandler }) => {
  const myRef = useRef<any>(null);
  const { translate } = useLanguage();

  return (
    <>
      <div className="combos_detail">
        <div className="col-9 details-col detail-card">
          <div className="details">
            <div
              ref={myRef}
              className="content-detail-page"
            >
              <Options
                distanceScrolling={80}
                titleOptions={translate("size")}
                iconOptions={glass}
                listOptions={[
                  { name: `${translate("small")} 12 oz`, price: 0 },
                  { name: `${translate("large")} 16 Oz`, price: 10 },
                ]}
                optionHandler={(e: any) => optionHandler(e)}
                attr="size"
                defaultValue={{ name: `${translate("small")} 12 oz`, price: 0 }}
              />
              <hr className="separator" />
              <Options
                distanceScrolling={160}
                titleOptions={translate("milk")}
                iconOptions={milk}
                listOptions={[
                  { name: translate("whole"), price: 0 },
                  { name: translate("lactoseFree"), price: 5 },
                  { name: translate("oatMilk"), price: 9 },
                ]}
                optionHandler={(e: any) => optionHandler(e)}
                attr="milk"
                defaultValue={{ name: translate("whole"), price: 0 }}
              />
              <hr className="separator" />
              <Options
                distanceScrolling={230}
                titleOptions={translate("sugar")}
                iconOptions={sugar}
                listOptions={[
                  { name: translate("less"), price: 0 },
                  { name: "Original", price: 0 },
                  { name: translate("more"), price: 0 },
                ]}
                optionHandler={(e: any) => optionHandler(e)}
                attr="sugar"
                defaultValue={{ name: "Original", price: 0 }}
              />
              <hr className="separator" />
              <OptionsList
                optionHandler={(e: any) => optionHandler(e)}
                listOptions={[
                  { name: translate("extraCoffee"), price: 10 },
                  { name: translate("extraCream"), price: 10 },
                ]}
                iconOptions={extra}
                attr="extra_coffee"
                multiple={true}
              />
              <hr className="separator" />
              <OptionsList
                optionHandler={(e: any) => optionHandler(e)}
                listOptions={[
                  { name: translate("lid"), price: 0 },
                  {
                    name: translate("noLid"),
                    price: 0,
                  },
                ]}
                iconOptions={lid}
                attr="lid"
                multiple={false}
              />
              <hr className="separator" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coffe;
