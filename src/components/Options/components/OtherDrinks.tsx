import { useRef } from "react";
import temperature from "../../../assets/icons/temperature.svg";
import { useLanguage } from "../../../context/Langi18nContext";
import Options from "../Options";
import "../Options.scss";

const OtherDrinks: React.FC = () => {

    const myRef = useRef<any>(null);
    const { translate } = useLanguage();
  
    const optionHandler = (position: number) => {
      if (myRef.current) {
        myRef.current.scrollTo({
          top: position,
          behavior: "smooth",
        });
      }
    };

    return(<>
        <div className="combos_detail">
          <div className="col-9 details-col detail-card">
            <div className="details">
              <div
                ref={myRef}
                className="content-detail-page"
              >
                <Options
                  distanceScrolling={360}
                  titleOptions={translate("temperature")}
                  iconOptions={temperature}
                  listOptions={[translate("roomTemp"), translate("hot")]}
                  optionHandler={(e: any) => optionHandler(e)}
                  attr="temperature"
                />
                <hr className="separator" />
              </div>
            </div>
          </div>
      </div>
        </>);
}

export default OtherDrinks;