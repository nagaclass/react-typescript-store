import { IProduct } from "interfaces";
import Button from "@material-ui/core/Button";

interface Props {
  item: IProduct;
  addToCartHandler: (selectedProduct: IProduct) => void;
  removeFromCartHandler: (id: number) => void;
}

const CartItem: React.FC<Props> = ({ item, addToCartHandler, removeFromCartHandler }) => {
  const { id, title, image, price, quantity } = item;
  return (
    <div className={`flex justify-between  mb-5 border-b-2 border-slate-400 pb-5`}>
      <span className="w-16 h-16 block border-2 border-slate-700 overflow-hidden rounded-full mr-5 p-2">
        <img src={image} alt={title} className="w-full h-full" />
      </span>
      <div className=" w-11/12">
        <h6 className="text-sm mb-2">{title}</h6>
        <div className="flex items-center justify-between text-sm font-semibold">
          <span>Total: ${price}</span>
          <span>Total: ${price * quantity}</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <Button variant="outlined" size="medium" onClick={() => addToCartHandler(item)}>
            +
          </Button>
          <span>{quantity}</span>
          <Button variant="outlined" size="medium" onClick={() => removeFromCartHandler(id)}>
            -
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
