import { IProduct } from "interfaces";

interface Props {
  product: IProduct;
  addToCartHandler: (selectedProduct: IProduct) => void;
}

const Product: React.FC<Props> = ({ product, addToCartHandler }) => {
  const { title } = product;

  return (
    <div>
      <h4 onClick={() => addToCartHandler(product)}>{title}</h4>
    </div>
  );
};

export default Product;
