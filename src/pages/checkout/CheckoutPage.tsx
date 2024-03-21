import barista from "../../assets/barista.png";
import ProductCheckoutCard from "../../components/productCheckoutCard/ProductCheckoutCard";

import CategoryNav from "../../components/CategoryNav/CategoryNav";
import Layout from "../../includes/layout/Layout";
import { useLanguage } from "../../context/Langi18nContext";

import "./CheckoutPage.scss";
import { useState } from "react";
import SuccessPayment from "../../components/Modal/SuccessPayment/SuccessPayment";
import ReceiptSent from "../../components/Modal/ReceiptSend/ReceiptSent";
import FailedPayment from "../../components/Modal/FailedPayment/FailedPayment";
import ContinuePayment from "../../components/Modal/ContinuePayment/ContinuePayment";


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

function CheckoutPage() {
  const [stateCard, setStateCard] = useState<boolean>(false);
  const { translate } = useLanguage();

  const optionHandlerCard = (state: boolean) => {
    setStateCard(!state);
  };

  return (
    <>
      <Layout>
        <div className="category-fixed">
          <CategoryNav />
        </div>
        <div className="checkout_background">
          <div className="checkout_container grid-3">
            <div className="col-5">
              <section className="tip">
                <div className="grid-2">
                  <div className="col-5">
                    <img
                      alt="Barista"
                      src={barista}
                    />
                  </div>
                  <div className="col-7 tip-text">
                    <h2>{translate("baristaTipText")}</h2>
                    <div className="tip-subtext">
                      <i className="tip-icon"></i>{" "}
                      <span>{translate("addTip")}</span>
                    </div>
                  </div>
                </div>
                <div className="grid-2 tip-options">
                  <div className="col">
                    <button className="tip-button">
                      <div className="percentange">0%</div>
                      <div className="middle">{translate("noTip")}</div>
                      <div>
                        <i className="dolar-icon"></i>
                      </div>
                    </button>
                    <button className="tip-button">
                      <div className="percentange">5%</div>
                      <div className="middle">¡{translate("bonus")}!</div>
                      <div>
                        <i className="dolar-icon"></i>
                      </div>
                    </button>
                  </div>
                  <div className="col-6">
                    <button className="tip-button">
                      <div className="percentange">10%</div>
                      <div className="middle">
                        ¡{translate("excellentChoice")}!
                      </div>
                      <div>
                        <i className="dolar-icon"></i>
                      </div>
                    </button>
                    <button className="tip-button">
                      <div className="percentange">15%</div>
                      <div className="middle">¡{translate("gesture")}!</div>
                      <div>
                        <i className="dolar-icon"></i>
                      </div>
                    </button>
                  </div>
                  <div className="col-12 decide">
                    <button className="tip-button">
                      <div className="percentange">{translate("other")}</div>
                      <div className="middle">¡{translate("youDecide")}!</div>
                      <div>
                        <i className="dolar-icon"></i>
                      </div>
                    </button>
                  </div>
                </div>
                <hr />
                <div className="pay-info">
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
                  <h2 className="text">{translate("selectPayMethod")}</h2>
                  <div className="pay-method">
                    <button
                      onClick={() => optionHandlerCard(stateCard)}
                      className="card"
                    >
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
                  <button className="cancel">{translate("cancel")}</button>
                </div>
              </section>
            </div>
            <div className="col-4">
              <section className="products">
                <div className="product">
                  <ProductCheckoutCard />
                </div>
                <div className="product">
                  <ProductCheckoutCard />
                </div>
                <div className="product">
                  <ProductCheckoutCard />
                </div>
                <div className="product">
                  <ProductCheckoutCard />
                </div>
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
                    <tr>
                      <td>Subtotal (4 productos)</td>
                      <td>$ 50</td>
                    </tr>
                    <tr>
                      <td>Propina</td>
                      <td>$ 50</td>
                    </tr>
                    <tr>
                      <td>Cupón (MOMO Coffee) <button className="btn-delete-cupon">Eliminar</button></td>
                      <td>$ 50</td>
                    </tr>
                  </table>
                  <hr className="border-dashed" />
                  <table>
                    <tr>
                      <td className="sub-total">Total</td>
                      <td>$ 50</td>
                    </tr>
                  </table>
                  <button className="btn-payment">{translate("pay")}</button>
                </div>
              </section>
            </div>
            {/* <ContinuePayment actionKey={""} /> */}
            {/* <FailedPayment actionKey={""} /> */}
            {/* <SuccessPayment actionKey={""} /> */}
            {/* <ReceiptSent actionKey={""} /> */}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default CheckoutPage;
