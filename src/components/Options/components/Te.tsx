import { useRef } from "react";
import glass from "/assets/icons/glass.svg";
import sugar from "/assets/icons/sugar.svg";
import lid from "/assets/icons/lid.svg";
import { useLanguage } from "../../../context/Langi18nContext";
import Options from "../Options";
import OptionsList from "../OptionsList";
import "../Options.scss";

interface TeProps{
  optionHandler: (e:any) => any
}

const Te: React.FC<TeProps> = ({optionHandler}) => {

    const myRef = useRef<any>(null);
    const { translate } = useLanguage();
  
    return(  <>
        <div className="combos_detail">
          <div className="col-9 details-col detail-card">
            <div className="details">
              <div ref={myRef} className="content-detail-page">
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
                  distanceScrolling={280}
                  titleOptions={translate("sugar")}
                  iconOptions={sugar}
                  listOptions={[translate("less"), "Original", translate("more")]}
                  optionHandler={(e: any) => optionHandler(e)}
                  attr="sugar"
                  defaultValue="Original"
                />
                <hr className="separator" />
                <OptionsList
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
              </div>
            </div>
          </div>
        </div>
      </>);
}

export default Te;