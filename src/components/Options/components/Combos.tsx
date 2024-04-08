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
            <div ref={myRef} className="content-detail-page">
              <h2 className="step">{translate("drinkStepOne")}</h2>
              <hr className="separator" />
              <Options
                distanceScrolling={160}
                titleOptions={translate("size")}
                iconOptions={glass}
                listOptions={["Chico 12 oz", "Grande 16 Oz"]}
                optionHandler={(e: any) => optionHandler(e)}
                attr="size"
                defaultValue="Chico 12 oz"
              />
              <hr className="separator" />
              <Options
                distanceScrolling={260}
                titleOptions={translate("milk")}
                iconOptions={milk}
                listOptions={[
                  translate("whole"),
                  translate("lactoseFree"),
                  translate("oatMilk"),
                ]}
                optionHandler={(e: any) => optionHandler(e)}
                defaultValue={translate("lactoseFree")}
                attr="milk"
              />
              <hr className="separator" />
              <Options
                distanceScrolling={280}
                titleOptions={translate("sugar")}
                iconOptions={sugar}
                listOptions={[translate("less"), "Original", translate("more")]}
                optionHandler={(e: any) => optionHandler(e)}
                defaultValue={"Original"}
                attr="sugar"
              />
              <hr className="separator" />
              <OptionsList
                optionHandler={(e: any) => optionHandler(e)}
                listOptions={[
                  translate("extraCoffee"),
                  translate("extraCream"),
                ]}
                iconOptions={extra}
                attr="extra_coffee"
                multiple={true}
              />
              <hr className="separator" />
              <OptionsList
                distanceScrolling={380}
                optionHandler={(e: any) => optionHandler(e)}
                listOptions={[
                  "Con tapa",
                  'Sin tapa <span class="recicle"><img class="recicle-icon" src="/assets/icons/recicle.svg" alt="recicle-icon"></span> Ayúdanos a cuidar el planeta',
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
                listOptions={[translate("roomTemp"), translate("hot")]}
                optionHandler={(e: any) => optionHandler(e)}
                attr="temperature"
              />
              <hr className="separator" />
              <OptionsList
                listOptions={[
                  translate("machaSauce"),
                  translate("chipotleSauce"),
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
