import { useRef } from "react";
import sauce from "/assets/icons/sauce.svg";
import temperature from "/assets/icons/temperature.svg";
import { useLanguage } from "../../../context/Langi18nContext";
import Options from "../Options";
import OptionsList from "../OptionsList";
import "../Options.scss";

interface AlimentosProps {
  optionHandler: (e: any) => any;
}

const Alimentos: React.FC<AlimentosProps> = ({optionHandler}) => {
  const myRef = useRef<any>(null);
  const { translate } = useLanguage();

  return (
    <>
      <div className="combos_detail">
        <div className="col-9 details-col detail-card">
          <div className="details">
            <div ref={myRef} className="content-detail-page">
              <Options
                distanceScrolling={360}
                titleOptions={translate("temperature")}
                iconOptions={temperature}
                listOptions={[{name: translate("roomTemp"), price: 0}, {name: translate("hot"), price: 0}]}
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

export default Alimentos;
