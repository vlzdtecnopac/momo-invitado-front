import "./ProductCard.scss";

interface ProductCardProps {
  img: string;
  price: string;
  name: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ img, price, name }) => {
  return (
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
  );
};
export default ProductCard;
