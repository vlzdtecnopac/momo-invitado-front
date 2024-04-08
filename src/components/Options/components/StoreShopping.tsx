import { useRef } from "react";
import color from "/assets/icons/color.svg";
import tshirt from "/assets/icons/t-shirt.svg";
import coffeeBag from "/assets/icons/coffee_bag.svg";
import beans from "/assets/icons/coffee_beans.svg";
import { useLanguage } from "../../../context/Langi18nContext";
import Options from "../Options";
import "../Options.scss";
import OptionsExtra from "../OptionsExtra";

interface StoreShoppingProps {
  optionHandler: (e: any) => any;
  type?: string | undefined;
}

const StoreShopping: React.FC<StoreShoppingProps> = ({
  optionHandler,
  type,
}) => {
  const myRef = useRef<any>(null);
  const { translate } = useLanguage();

  return (
    <>
      <div className="combos_detail">
        <div className="col-9 details-col detail-card">
          <div className="details">
            <div ref={myRef} className="content-detail-page">
              {type == "Merch" && (
                <>
                  <Options
                    distanceScrolling={320}
                    titleOptions={translate("size")}
                    iconOptions={tshirt}
                    listOptions={[
                      `${translate("small")}`,
                      `${translate("medium")}`,
                      `${translate("large")}`,
                    ]}
                    attr="size"
                  />
                  <hr className="separator" />
                  <OptionsExtra
                    listOptions={[
                      `${translate("green")}`,
                      `${translate("darkBlue")}`,
                      `${translate("orange")}`,
                      `${translate("lightBlue")}`,
                      `${translate("cream")}`,
                    ]}
                    icon={color}
                    attr="color"
                    multiple={false}
                  />
                  <hr className="separator" />
                </>
              )}
              {type == "Coffe" && (
                <>
                  <Options
                    titleOptions={translate("coffeeType")}
                    iconOptions={beans}
                    listOptions={[translate("ground"), translate("beans")]}
                    attr="coffee_type"
                    optionHandler={(e: any) => optionHandler(e)}
                    defaultValue={translate("ground")}
                  />
                  <hr className="separator" />
                  <Options
                    titleOptions={translate("size")}
                    iconOptions={coffeeBag}
                    listOptions={["Chico 250gr", "Mediano 500gr", "Grande 1kg"]}
                    attr="size"
                    optionHandler={(e: any) => optionHandler(e)}
                    defaultValue="Mediano 500gr"
                  />
                  <hr className="separator" />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreShopping;
