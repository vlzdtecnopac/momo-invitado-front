import "./ProductCardDetail.scss";

interface ProductCardDetailProps {
  img: string;
  name: string;
  description: string;
}

const ProductCardDetail: React.FC<ProductCardDetailProps> = ({
  img,
  name,
  description,
}) => {
  return (
    <div className="product_card_description">
      <img
        className="img"
        src={img}
        alt="product"
      />
      <h2 className="name">{name}</h2>
      <h3 className="description">{description}</h3>
    </div>
  );
};
export default ProductCardDetail;
