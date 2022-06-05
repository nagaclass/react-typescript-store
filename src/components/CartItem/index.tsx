import { IProduct } from "interfaces";
import Button from "@material-ui/core/Button";

interface Props {
  item: IProduct;
}

const CartItem: React.FC<Props> = ({ item: { title, image, price } }) => {
  return (
    <div className={`flex justify-between  mb-5 border-b-2 border-slate-400 pb-5`}>
      <span className="w-16 h-16 block border-2 border-slate-700 overflow-hidden rounded-full mr-5 p-2">
        <img src={image} alt={title} className="w-full h-full" />
      </span>
      <div className=" w-11/12">
        <h3>{title}</h3>
        <h3>Total: ${price}</h3>
        <div className="flex items-center justify-between mt-2">
          <Button variant="outlined" size="medium">
            +
          </Button>
          <span>4</span>
          <Button variant="outlined" size="medium">
            -
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
