import { IProduct } from "interfaces";

interface Props {
  product: IProduct;
}

const Product: React.FC<Props> = ({ product: { title } }) => {
  return (
    <div>
      <h4>{title}</h4>
    </div>
  );
};

export default Product;
