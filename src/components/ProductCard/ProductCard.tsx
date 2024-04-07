import { useNavigate } from "react-router-dom";
import { useProductOptionStore } from "../../store/productOption.store";
import "./ProductCard.scss";

interface ProductCardProps {
  id: number;
  img: string;
  price: string;
  name: string;
  type?: string
}

const ProductCard: React.FC<ProductCardProps> = ({ id, img, price, name, type }) => {
  const setDataProductOption = useProductOptionStore(
    (state) => state.setDataProductOption
  );
  const navigate = useNavigate();
  
  img.replace(/(^"|"$|&quot;)/g, '');
  if(img.includes('","')){
    img = img.split('","')[0];
  }

  const handleProductDetail = () => {
    setDataProductOption( {
      size: "",
      milk: "",
      sugar: "",
      extra_coffee: [],
      lid: [],
      sauce: [],
      temperature: "",
      color: "",
      coffee_type: "",
    })
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
