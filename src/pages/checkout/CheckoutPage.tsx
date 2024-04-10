import React, { useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { useLanguage } from "../../context/Langi18nContext";
import ProductCheckoutCard from "../../components/productCheckoutCard/ProductCheckoutCard";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import Layout from "../../includes/layout/Layout";
import barista from "/assets/barista.png";
import "./CheckoutPage.scss";
import { db } from "../../helpers/dexie_db.helper";

function MethodsCard() {
  const { translate } = useLanguage();
  return (
    <>
      <hr />
      <div className="card-type">
        <button className="type">{translate("credit")}</button>
        <button className="type">{translate("debit")}</button>
      </div>
    </>
  );
}

const TipMomoClient: React.FC<any> = ({ onChange }) => {
  const { translate } = useLanguage();
  const [getOtherTipSatisfaction, setOtherTipSatisfaction] =
    useState<boolean>(false);

  const onHandlerTip = (event: React.MouseEvent<HTMLButtonElement>) => {
    const attrValue = event.currentTarget.getAttribute("value");
    onChange(attrValue);
  };

  return (
    <>
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
            value="0"
            onClick={(e) => onHandlerTip(e)}
            className="tip-button"
          >
            <div className="percentange">0%</div>
            <div className="middle">{translate("noTip")}</div>
            <div>
              <i className="dolar-icon"></i>
            </div>
          </button>
          <button
            value="5"
            onClick={(e) => onHandlerTip(e)}
            className="tip-button"
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
            value="10"
            onClick={(e) => onHandlerTip(e)}
            className="tip-button"
          >
            <div className="percentange">10%</div>
            <div className="middle">¡{translate("excellentChoice")}!</div>
            <div>
              <i className="dolar-icon"></i>
            </div>
          </button>
          <button
            value="15"
            onClick={(e) => onHandlerTip(e)}
            className="tip-button"
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
              onClick={() => setOtherTipSatisfaction(true)}
              className="tip-button_two"
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
                <button className="tip-button">
                  <div className="percentange">{translate("other")}</div>
                  <div className="middle">¡{translate("youDecide")}!</div>
                  <div>
                    <i className="dolar-icon"></i>
                  </div>
                </button>
              </div>
              <div className="col-6 decide-tip">
                <button className="tip-button">%</button>
                <button className="tip-button">$</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const MethodPayment: React.FC<any> = ({ onCancel }) => {
  const { translate } = useLanguage();

  const [stateCard, setStateCard] = useState<boolean>(false);

  const optionHandlerCard = (state: boolean) => {
    setStateCard(!state);
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
          />
          <i className="icon-user"></i>
        </div>
      )}
      <h2 className="text">{translate("selectPayMethod")}</h2>
      <div className="pay-method">
        <button onClick={() => optionHandlerCard(stateCard)} className="card">
          <i className="card-icon"></i>
          {translate("card")}
        </button>
        {stateCard && <MethodsCard />}
        <hr />
        <button className="cash">
          <i className="cash-icon"></i>
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
  const productCart = useLiveQuery(() => db.product.orderBy('name_product').toArray());
  const [tipMount, setTipMount] = useState<String>();
  const { translate } = useLanguage();

  return (
    <>
      <Layout>
        <div className="category-fixed">
          <CategoryNav />
        </div>
        <div className="checkout_background">
          <div className="checkout_container grid-3 grid-equalHeight">
            <div className="col-5">
              <section className="tip">
                {tipMount ? (
                  <MethodPayment onCancel={() => setTipMount("")} />
                ) : (
                  <TipMomoClient onChange={(e: string) => setTipMount(e)} />
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
                <div className="cupon">
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
                </div>
                <div></div>
                <div className="total">
                  <table>
                    <tbody>
                      <tr>
                        <td>Subtotal (4 productos)</td>
                        <td className="amount">$ 50</td>
                      </tr>
                      <tr>
                        <td>Propina</td>
                        <td className="amount">$ 50</td>
                      </tr>
                      <tr>
                        <td>
                          Cupón (MOMO Coffee)
                          <button className="btn_delete_cupon">Eliminar</button>
                        </td>
                        <td className="amount">$ 50</td>
                      </tr>
                    </tbody>
                  </table>
                  <hr className="border-dashed" />
                  <table>
                    <tbody>
                      <tr>
                        <td className="sub-total">Total</td>
                        <td className="amount">$ 50</td>
                      </tr>
                    </tbody>
                  </table>
                  <button className="btn-payment">{translate("pay")}</button>
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
