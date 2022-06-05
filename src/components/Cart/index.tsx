import CartItem from "components/CartItem";
import { IProduct } from "interfaces";

interface Props {
  cartItems: IProduct[];
}

const Cart: React.FC<Props> = ({ cartItems }) => {
  return (
    <div className="w-96 p-5">
      {!cartItems.length ? (
        <h2>No items in your Cart!</h2>
      ) : (
        <>
          <h2 className="text-2xl mb-10">{cartItems.length} Items in your Cart</h2>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </>
      )}
    </div>
  );
};

export default Cart;
