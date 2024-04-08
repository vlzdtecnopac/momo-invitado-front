import { useRef } from "react";
import glass from "/assets/icons/glass.svg";
import milk from "/assets/icons/bottle.svg";
import sugar from "/assets/icons/sugar.svg";
import extra from "/assets/icons/extra.svg";
import lid from "/assets/icons/lid.svg";
import temperature from "/assets/icons/temperature.svg";
import { useLanguage } from "../../../context/Langi18nContext";
import Options from "../Options";
import OptionsList from "../OptionsList";
import "../Options.scss";


interface SpecialMomoProps{
  optionHandler: (e:any) => any
}

const SpecialsMomo: React.FC<SpecialMomoProps> = ({optionHandler}) => {

    const myRef = useRef<any>(null);
    const { translate } = useLanguage();
  
    return(<>
        <div className="combos_detail">
          <div className="col-9 details-col detail-card">
            <div className="details">
              <div
                ref={myRef}
                className="content-detail-page"
              >
                 <Options
                  distanceScrolling={80}
                  titleOptions={translate("temperature")}
                  iconOptions={temperature}
                  listOptions={[{name: translate("roomTemp"), price:0}, {name: translate("hot"), price: 0}]}
                  optionHandler={(e: any) => optionHandler(e)}
                  attr="temperature"
                />
                <hr className="separator" />
                <Options
                  distanceScrolling={160}
                  titleOptions={translate("size")}
                  iconOptions={glass}
                  listOptions={[{name: "Chico 12 oz", price: 0}, {name: "Grande 16 Oz", price: 0}]}
                  optionHandler={(e: any) => optionHandler(e)}
                  attr="size"
                  defaultValue={{name: "Chico 12 oz", price: 0}}
                />
                <hr className="separator" />
                <Options
                  distanceScrolling={260}
                  titleOptions={translate("milk")}
                  iconOptions={milk}
                  listOptions={[
                    {name: translate("whole"), price: 0},
                    {name: translate("lactoseFree"), price: 0},
                    {name: translate("oatMilk"), price: 0},
                  ]}
                  optionHandler={(e: any) => optionHandler(e)}
                  attr="milk"
                  defaultValue={{name: translate("lactoseFree"), price: 0}}
                />
                <hr className="separator" />
                <Options
                  distanceScrolling={280}
                  titleOptions={translate("sugar")}
                  iconOptions={sugar}
                  listOptions={[
                    {name: translate("less"), price: 0},
                    {name: "Original", price: 0},
                    {name: translate("more"), price: 0}
                  ]}
                  optionHandler={(e: any) => optionHandler(e)}
                  attr="sugar"
                  defaultValue={{name: "Original", price:0}}
                />
                <hr className="separator" />
                <OptionsList
                  optionHandler={(e: any) => optionHandler(e)}
                  listOptions={[
                    {name: translate("extraCoffee"), price: 10},
                    {name: translate("extraCream"), price: 10},
                  ]}
                  iconOptions={extra}
                  attr="extra_coffee"
                  multiple={true}
                />
                <hr className="separator" />
                <OptionsList
                  optionHandler={(e: any) => optionHandler(e)}
                  listOptions={[
                    {name: "Con tapa", price: 10},
                    {name: 'Sin tapa <span class="recicle"><img class="recicle-icon" src="/assets/icons/recicle.svg" alt="recicle-icon"></span> Ayúdanos a cuidar el planeta', price: 0}
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
        </>);
}

export default SpecialsMomo;