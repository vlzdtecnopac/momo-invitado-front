import "./ComplementCard.scss";
import { v4 as uuidv4 } from 'uuid';
import coldTea from "../../assets/cold-tea.png";

function ComplementCard() {
  let Id =  uuidv4();

  return (
    <div className="complement_card">
      <div className="card-img">
        <img className="img" src={coldTea} alt="" />
      </div>
      <div className="complement-text">
        <h3 className="name">Croissant de almendra</h3>
        <div className="even">
          <div>
            <h4 className="price">$30</h4>
          </div>
          <div>
            <div className="opcion-radio-text">
              <input type="radio" id={`small-text-${Id}`} name="complement" />
              <label htmlFor={`small-text-${Id}`} ></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ComplementCard;
