import { Link } from "react-router-dom";
import "./ProductCard.scss";

interface ProductCardProps {
  img: string;
  price: string;
  name: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ img, price, name }) => {
  img.replace(/(^"|"$|&quot;)/g, '');
  if(img.includes('","')){
    img = img.split('","')[0];
  }
  return (
    <Link to="../drink-detail">
      <div className="product_card">
        <img
          className="img"
          src={img}
          alt="product"
        />
        <div className="price">
          <span>${price}</span>
        </div>
        <h3 className="name">{name}</h3>
      </div>
    </Link>
  );
};
export default ProductCard;
