import { useNavigate } from "react-router-dom";
import "./ProductCard.scss";

interface ProductCardProps {
  id: number;
  img: string;
  price: string;
  name: string;
  type?: string
}

const ProductCard: React.FC<ProductCardProps> = ({ id, img, price, name, type }) => {
  const navigate = useNavigate();
  img.replace(/(^"|"$|&quot;)/g, '');
  if(img.includes('","')){
    img = img.split('","')[0];
  }

  const handleProductDetail = () => {
    navigate(`../detail/${id}/${type}`);
  }
  return (
      <div className="product_card">
        <img
          onClick={()=>handleProductDetail()}
          className="img"
          src={img}
          alt="product"
          loading="lazy"
        />
        <div className="price">
          <span>${price}</span>
        </div>
        <h3 className="name">{name}</h3>
      </div>
  );
};
export default ProductCard;
