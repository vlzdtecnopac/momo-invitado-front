import React, { useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { useLanguage } from "../../context/Langi18nContext";
import { useShoppingStore } from "../../store/shopping.store";
import axiosInstance from "../../helpers/axios.helper";
import Layout from "../../includes/layout/Layout";
import { db } from "../../helpers/dexie_db.helper";

import ProductCheckoutCard from "../../components/productCheckoutCard/ProductCheckoutCard";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import PercentageTip from "../../components/Modal/PercentageTip/PercentageTip";
import AmountTip from "../../components/Modal/AmountTip/AmountTip";

import ContinuePayment from "../../components/Modal/ContinuePayment/ContinuePayment";
import barista from "/assets/barista.png";

import "./CheckoutPage.scss";

const MethodsCard: React.FC<{
  onClick: (e: boolean) => boolean;
}> = ({ onClick }) => {
  const { translate } = useLanguage();
  const [isActiveCredit, setIsActiveCredit] = useState<boolean>(false);
  const [isActiveDebit, setIsActiveDebit] = useState<boolean>(false);

  const handleCreditClick = () => {
    setIsActiveCredit(true);
    setIsActiveDebit(false);
    onClick(false);
  };
  const handleDebitClick = () => {
    setIsActiveCredit(false);
    setIsActiveDebit(true);
    onClick(false);
  };

  return (
    <>
      <hr />
      <div className="card-type">
        <button
          onClick={handleCreditClick}
          className={`type ${isActiveCredit ? "active" : ""}`}
        >
          {translate("credit")}
        </button>
        <button
          onClick={handleDebitClick}
          className={`type ${isActiveDebit ? "active" : ""}`}
        >
          {translate("debit")}
        </button>
      </div>
      <hr />
    </>
  );
};

const TipMomoClient: React.FC<any> = ({ onChange }) => {
  const { tip, setStoreTip } = useShoppingStore();
  const productCart = useLiveQuery(() =>
    db.product.orderBy("name_product").toArray()
  );
  const { translate } = useLanguage();
  const [getTipPorcent, setTipPorcent] = useState<boolean>();
  const [getTipAmount, setTipAmount] = useState<boolean>();
  const [getOtherTipSatisfaction, setOtherTipSatisfaction] =
    useState<boolean>(false);

  const onHandlerTip = (number: number) => {
    const subtotalCart = productCart?.reduce(
      (total, item) => item.subtotal + total,
      0
    );
    const propinaActual = (number * subtotalCart!) / 100;
    onChange(true);
    setStoreTip({
      tip: propinaActual,
      selectTip: number,
    });
  };

  return (
    <>
      {getTipPorcent ? (
        <PercentageTip
          onHandleCancel={() => {
            onChange(true);
            setTipPorcent(false);
          }}
        />
      ) : null}
      {getTipAmount ? (
        <AmountTip
          onHandleCancel={() => {
            onChange(true);
            setTipAmount(false);
          }}
        />
      ) : null}
      <div className="grid-2">
        <div className="col-5">
          <img alt="Barista" src={barista} />
        </div>
        <div className="col-7 tip-text">
          <h2>{translate("baristaTipText")}</h2>
          <div className="tip-subtext">
            <i className="tip-icon"></i> <span>{translate("addTip")}</span>
          </div>
        </div>
      </div>
      <div className="grid-2 grid-noGutter-noBottom tip-options">
        <div className="col">
          <button
            onClick={() => onHandlerTip(0)}
            className={`tip-button  ${
              tip.selectTip == 0 && !getOtherTipSatisfaction && "active"
            }`}
          >
            <div className="percentange">0%</div>
            <div className="middle">{translate("noTip")}</div>
            <div>
              <i className="dolar-icon"></i>
            </div>
          </button>
          <button
            onClick={() => onHandlerTip(5)}
            className={`tip-button  ${
              tip.selectTip == 5 && getOtherTipSatisfaction && "active"
            }`}
          >
            <div className="percentange">5%</div>
            <div className="middle">¡{translate("bonus")}!</div>
            <div>
              <i className="dolar-icon"></i>
            </div>
          </button>
        </div>
        <div className="col-6">
          <button
            onClick={() => onHandlerTip(10)}
            className={`tip-button  ${
              tip.selectTip == 10 && !getOtherTipSatisfaction && "active"
            }`}
          >
            <div className="percentange">10%</div>
            <div className="middle">¡{translate("excellentChoice")}!</div>
            <div>
              <i className="dolar-icon"></i>
            </div>
          </button>
          <button
            onClick={() => onHandlerTip(15)}
            className={`tip-button  ${
              tip.selectTip == 15 && !getOtherTipSatisfaction && "active"
            }`}
          >
            <div className="percentange">15%</div>
            <div className="middle">¡{translate("gesture")}!</div>
            <div>
              <i className="dolar-icon"></i>
            </div>
          </button>
        </div>
        {!getOtherTipSatisfaction && (
          <div className="col-12 decide">
            <button
              onClick={() => {
                setOtherTipSatisfaction(true);
              }}
              className={`tip-button_two  ${
                getOtherTipSatisfaction && "active"
              }`}
            >
              <div className="percentange">{translate("other")}</div>
              <div className="middle">¡{translate("youDecide")}!</div>
              <div>
                <i className="dolar-icon"></i>
              </div>
            </button>
          </div>
        )}
        {getOtherTipSatisfaction && (
          <div className="col-12 decide">
            <div className="grid-2 grid-noGutter-noBottom">
              <div className="col-6">
                <button
                  className={` tip-button ${
                    getOtherTipSatisfaction && "active"
                  }`}
                >
                  <div className="percentange">{translate("other")}</div>
                  <div className="middle">¡{translate("youDecide")}!</div>
                  <div>
                    <i className="dolar-icon"></i>
                  </div>
                </button>
              </div>
              <div className="col-6 decide-tip">
                <button
                  onClick={() => setTipPorcent(true)}
                  className="tip-button"
                >
                  %
                </button>
                <button
                  onClick={() => setTipAmount(true)}
                  className="tip-button"
                >
                  $
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const MethodPayment: React.FC<{
  onCancel: Function;
  onClick: (e: boolean) => any;
  setInvitado: (e: string) => any;
}> = ({ onCancel, onClick, setInvitado }) => {
  const { translate } = useLanguage();

  const [stateCard, setStateCard] = useState<boolean>(false);
  const [stateCash, setStateCash] = useState<boolean>(false);

  const HandlerCardClick = (state: boolean) => {
    setStateCard(!state);
    setStateCash(false);
    onClick(true);
  };

  const HandlerCashClick = (state: boolean) => {
    setStateCash(!state);
    setStateCard(false);
    onClick(false);
  };

  return (
    <div className="pay-info">
      {!localStorage.getItem("client-id") && (
        <div className="form-group">
          <input
            placeholder="Invitado"
            type="text"
            id="name"
            name="name"
            className="client-name"
            onChange={(e) => setInvitado(e.target.value)}
            autoComplete="off"
          />
          <i className="icon-user"></i>
        </div>
      )}
      <h2 className="text">{translate("selectPayMethod")}</h2>
      <div className="pay-method">
        <button
          onClick={() => HandlerCardClick(stateCard)}
          className={`card ${stateCard && "active"}`}
        >
          <i className={`card-icon ${stateCard && "active"}`}></i>
          {translate("card")}
        </button>
        {stateCard && <MethodsCard onClick={(e) => onClick(e)} />}
        <button
          onClick={() => HandlerCashClick(stateCash)}
          className={`cash ${stateCash && "active"}`}
        >
          <i className={`cash-icon ${stateCash && "active"}`}></i>
          {translate("cash")}
        </button>
      </div>
      <button onClick={() => onCancel()} className="cancel">
        {translate("cancel")}
      </button>
    </div>
  );
};

function CheckoutPage() {
  const { tip } = useShoppingStore();
  const productCart = useLiveQuery(() =>
    db.product.orderBy("name_product").toArray()
  );
  const [tipMount, setTipMount] = useState<boolean>(false);
  const [getEnable, setEnable] = useState<boolean>(true);
  const [getError, setError] = useState<string>("");
  const [getInvitado, setInvitado] = useState<string>("");
  const { translate } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function countProducts() {
    return productCart?.reduce((total, item) => total + item.quanty, 0);
  }

  function subTotal() {
    return productCart?.reduce((total, item) => total + item.subtotal, 0);
  }

  function totalPayment() {
    return Number(subTotal()) + tip.tip;
  }

  const onHandlerPayment = async () => {
    let products: any = [];

    productCart?.map((item) => {
      if (typeof item.extra === "string") {
        try {
          item.extra = JSON.parse(item.extra);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      }
      products.push(item);
    });

    if (products.length > 0 && getInvitado.length > 0) {
      try {
        let dataJson = {
          shopping_id: localStorage.getItem("shopping_id"),
          name_client: getInvitado,
          kiosko_id: localStorage.getItem("kiosko-momo"),
          product: JSON.stringify(products),
          columns_pending: 4,
        };
        await axiosInstance.post(`/pedido/create`, dataJson).finally(() => {
         db.product.clear();
         setIsModalOpen(true);
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      setError("Ingresa el nombre del cliente o invitado");
    }
  };

  return (
    <>
      <Layout>
        {isModalOpen && (
          <ContinuePayment actionKey={""} targetPath={"../order-here"} />
        )}
        <div className="category-fixed">
          <CategoryNav cart={false} />
        </div>
        <div className="checkout_background">
          <div className="checkout_container grid-3 grid-equalHeight">
            <div className="col-5">
              <section className="tip">
                {tipMount ? (
                  <MethodPayment
                    setInvitado={(event: string) => setInvitado(event)}
                    onCancel={() => setTipMount(false)}
                    onClick={(e) => setEnable(e)}
                  />
                ) : (
                  <TipMomoClient onChange={(e: boolean) => setTipMount(e)} />
                )}
              </section>
            </div>
            <div className="col-4">
              <section className="products">
                {productCart?.map((item) => (
                  <div className="product" key={item.id}>
                    <ProductCheckoutCard data={item} />
                  </div>
                ))}
              </section>
            </div>
            <div className="col-3 ">
              <section className="checkout">
                {/* <div className="cupon">
                  <div className="form-group">
                    <input
                      placeholder={translate("addCoupon")}
                      type="text"
                      id="cupon"
                      name="cupon"
                      className="cupon-code"
                    />
                    <i className="cupon-icon"></i>
                  </div>
                  <button className="add-cupon-btn">{translate("add")}</button>
                </div> */}
                <div></div>
                <div className="total">
                  <table>
                    <tbody>
                      <tr>
                        <td>Subtotal ({countProducts()} productos)</td>
                        <td className="amount">$ {subTotal()}</td>
                      </tr>
                      <tr>
                        <td>Propina</td>
                        <td className="amount">$ {tip.tip}</td>
                      </tr>
                      {/* <tr>
                        <td>
                          Cupón (MOMO Coffee)
                          <button className="btn_delete_cupon">Eliminar</button>
                        </td>
                        <td className="amount">$ 0</td>
                      </tr> */}
                    </tbody>
                  </table>
                  <hr className="border-dashed" />
                  <table>
                    <tbody>
                      <tr>
                        <td className="sub-total">Total</td>
                        <td className="amount">$ {totalPayment()}</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-error">{getError}</p>
                  <button
                    onClick={() => onHandlerPayment()}
                    disabled={getEnable}
                    className="btn-payment"
                  >
                    {translate("pay")}
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default CheckoutPage;
