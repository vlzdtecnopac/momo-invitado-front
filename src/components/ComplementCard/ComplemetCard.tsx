import "./ComplementCard.scss";
import coldTea from "../../assets/cold-tea.png";

function ComplemetCard() {
  return (
    <div className="complement_card">
      <img
        className="img"
        src={coldTea}
        alt=""
      />
      <div className="complement-text">
        <h3 className="name">Croissant de almendra</h3>
        <div className="even">
          <div>
            {" "}
            <h4 className="price">$30</h4>
          </div>
          <div>
            <input
              name="complement"
              className="radio"
              type="radio"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ComplemetCard;
