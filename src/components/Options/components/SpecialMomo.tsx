import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../helpers/axios.helper";

import glass from "/assets/icons/glass.svg";
import temp from "/assets/icons/temperature.svg";
import sauce from "/assets/icons/sauce.svg";
import milk from "/assets/icons/bottle.svg";
import sugar from "/assets/icons/sugar.svg";
import extra from "/assets/icons/extra.svg";
import lid from "/assets/icons/lid.svg";
import beans from "/assets/icons/coffee_beans.svg";

import Options from "../Options";
import OptionsList from "../OptionsList";
import "../Options.scss";
interface SpecialMomoProps {
  optionHandler: (e: any) => any;
}

const SpecialsMomo: React.FC<SpecialMomoProps> = ({ optionHandler }) => {
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
                  {key == "Extra  Shot de Café" || key == "Tapa" || key == "Salsas" ? (
                    <>
                      <OptionsList
                        optionHandler={(e: any) => optionHandler(e)}
                        listOptions={options[key]}
                        iconOptions={(() => {
                          switch (key) {
                            case "Extra  Shot de Café":
                              return extra;
                            case "Tapa":
                              return lid;
                            case "Salsas":
                              return sauce;
                            default:
                              return "";
                          }
                        })()}
                        attr={(() => {
                          switch (key) {
                            case "Extra  Shot de Café":
                              return "extra_coffee";
                            case "Tapa":
                              return "lid";
                            case "Salsas":
                              return "sauce";
                            default:
                              return "";
                          }
                        })()}
                        multiple={(() => {
                          switch (key) {
                            case "Extra  Shot de Café":
                              return true;
                            case "Tapa":
                              return false;
                            case "Salsas":
                              return true;
                            default:
                              return false;
                          }
                        })()}
                        defaultValue={(() => {
                          switch (key) {
                            case "Tapa":
                              return {name: "Sin Tapa", price: 0};
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
                            case "Azucar":
                              return sugar;
                            case "Tamaño":
                              return glass;
                            case "Tipo de Leche":
                              return milk;
                            case "Temperatura":
                              return temp;
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
                            case "Azucar":
                              return "sugar";
                            case "Tamaño":
                              return "size";
                            case "Tipo de Leche":
                              return "milk";
                            case "Temperatura":
                              return "temperature";
                            case "Tipo de Café":
                              return "coffee_type";
                            default:
                              return "";
                          }
                        })()}
                        defaultValue={(() => {
                          switch (key) {
                            case "Azucar":
                              return {name: "Original", price: 0};
                            case "Tamaño":
                              return {name: "Chico", price: 0};
                            case "Tipo de Leche":
                              return {name: "Entera", price: 0};
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

export default SpecialsMomo;
