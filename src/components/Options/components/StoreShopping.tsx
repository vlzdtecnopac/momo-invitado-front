import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../helpers/axios.helper";

import coffeeBag from "/assets/icons/coffee_bag.svg";
import beans from "/assets/icons/coffee_beans.svg";
import tshirt from "/assets/icons/t-shirt.svg";
import color from "/assets/icons/color.svg";

import Options from "../Options";
import OptionsList from "../OptionsList";
import "../Options.scss";


interface StoreShoppingProps {
  optionHandler: (e: any) => any;
  type?: string | undefined;
}

const StoreShopping: React.FC<StoreShoppingProps> = ({
  optionHandler,
}) => {
  const myRef = useRef<any>(null);
  const { product_id } = useParams();
  const [options, setOptions] = useState<any>({});

  useEffect(() => {
    consultOptionsPorduct();
  }, []);

  const consultOptionsPorduct = async () => {
    let response: any = await axiosInstance.get(
      `/product/options/${product_id}`
    );
    setOptions(response.data);
  };

  return (
    <>
      <div className="combos_detail">
        <div className="col-9 details-col detail-card">
          <div className="details">
            <div
              ref={myRef}
              className="content-detail-page"
            >
                {Object.keys(options).map((key: string, i: number) => (
                <div id={key} key={key}>
                  {key == "Color" ? (
                    <>
                      <OptionsList
                        optionHandler={(e: any) => optionHandler(e)}
                        listOptions={options[key]}
                        iconOptions={(() => {
                          switch (key) {
                            case "Color":
                              return color;
                            default:
                              return "";
                          }
                        })()}
                        attr={(() => {
                          switch (key) {
                            case "Color":
                              return "color";
                            default:
                              return "";
                          }
                        })()}
                        multiple={(() => {
                          switch (key) {
                            case "Color":
                              return true;
                            default:
                              return false;
                          }
                        })()}
                        defaultValue={(() => {
                          switch (key) {
                            default:
                              return {name: "", price: 0};
                          }
                        })()}
                      />
                      <hr className="separator" />
                    </>
                  ) : (
                    <>
                      <Options
                        distanceScrolling={150 * i}
                        titleOptions={key}
                        iconOptions={(() => {
                          switch (key) {
                            case "Tamaño Merch":
                              return tshirt;
                            case "Tamaño bolsa de cafe":
                                return coffeeBag;
                            case "Tipo de Café":
                                return beans;
                            default:
                              return "";
                          }
                        })()}
                        listOptions={options[key]}
                        optionHandler={(e: any) => optionHandler(e)}
                        attr={(() => {
                          switch (key) {
                            case "Tamaño Merch":
                              return "size";
                            case "Tamaño bolsa de cafe":
                              return "size";
                            case "Tipo de Café":
                                return "coffee_type";
                            default:
                              return "";
                          }
                        })()}
                        defaultValue={(() => {
                          switch (key) {
                            case "Tamaño Merch":
                              return {name: "M", price: 0};
                            case "Tamaño bolsa de cafe":
                                return {name: "250 gr", price: 0};
                            default:
                              return {name: "", price: 0};
                          }
                        })()}
                      />
                      <hr className="separator" />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreShopping;
