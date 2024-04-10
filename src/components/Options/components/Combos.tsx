import { useRef } from "react";
import glass from "/assets/icons/glass.svg";
import milk from "/assets/icons/bottle.svg";
import sugar from "/assets/icons/sugar.svg";
import extra from "/assets/icons/extra.svg";
import lid from "/assets/icons/lid.svg";
import sauce from "/assets/icons/sauce.svg";
import temperature from "/assets/icons/temperature.svg";
import { useLanguage } from "../../../context/Langi18nContext";
import Options from "../Options";
import OptionsList from "../OptionsList";
import "../Options.scss";

interface CombosProps {
  optionHandler: (e: any) => any;
}

const Combos: React.FC<CombosProps> = ({ optionHandler }) => {
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
              <h2 className="step">{translate("drinkStepOne")}</h2>
              <hr className="separator" />
              <Options
                distanceScrolling={160}
                titleOptions={translate("size")}
                iconOptions={glass}
                listOptions={[
                  { name: `${translate("small")} 12 Oz`, price: 0 },
                  { name: `${translate("large")} 16 Oz`, price: 10 },
                ]}
                optionHandler={(e: any) => optionHandler(e)}
                attr="size"
                defaultValue={{ name: `${translate("small")} 12 Oz`, price: 0 }}
              />
              <hr className="separator" />
              <Options
                distanceScrolling={260}
                titleOptions={translate("milk")}
                iconOptions={milk}
                listOptions={[
                  { name: translate("whole"), price: 0 },
                  { name: translate("lactoseFree"), price: 5 },
                  { name: translate("oatMilk"), price: 9 },
                ]}
                optionHandler={(e: any) => optionHandler(e)}
                defaultValue={{ name: translate("whole") }}
                attr="milk"
              />
              <hr className="separator" />
              <Options
                distanceScrolling={280}
                titleOptions={translate("sugar")}
                iconOptions={sugar}
                listOptions={[
                  { name: translate("less"), price: 0 },
                  { name: "Original", price: 0 },
                  { name: translate("more"), price: 0 },
                ]}
                optionHandler={(e: any) => optionHandler(e)}
                defaultValue={{ name: "Original" }}
                attr="sugar"
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
                distanceScrolling={380}
                optionHandler={(e: any) => optionHandler(e)}
                defaultValue= {{name: translate("noLid"), price: 0 }}
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
              <h2 className="step">{translate("drinkStepTwo")}</h2>
              <hr className="separator" />
              <Options
                distanceScrolling={580}
                titleOptions={translate("temperature")}
                iconOptions={temperature}
                listOptions={[
                  { name: translate("roomTemp"), price: 0 },
                  { name: translate("hot"), price: 0 },
                ]}
                optionHandler={(e: any) => optionHandler(e)}
                attr="temperature"
                defaultValue={{ name: translate("roomTemp") }}
              />
              <hr className="separator" />
              <OptionsList
                listOptions={[
                  { name: translate("machaSauce"), price: 10 },
                  { name: translate("chipotleSauce"), price: 10 },
                ]}
                iconOptions={sauce}
                distanceScrolling={310}
                attr="sauce"
                multiple={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Combos;
