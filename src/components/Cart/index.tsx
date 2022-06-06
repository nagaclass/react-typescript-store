import CartItem from "components/CartItem";
import { IProduct } from "interfaces";

interface Props {
  cartItems: IProduct[];
  addToCartHandler: (selectedProduct: IProduct) => void;
  removeFromCartHandler: (id: number) => void;
}

const Cart: React.FC<Props> = ({ cartItems, addToCartHandler, removeFromCartHandler }) => {
  return (
    <div
      className={`w-96 p-5 h-full ${!cartItems.length ? "flex items-center justify-center" : ""}`}
    >
      {!cartItems.length ? (
        <div className="flex flex-col text-center">
          <h1 className="text-2xl font-semibold">YOUR CART IS EMPTY</h1>
          <img
            src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-29/90/empty_cart-512.png"
            alt="empty cart"
          />
        </div>
      ) : (
        <>
          <h2 className="text-2xl mb-10">{cartItems.length} Items in your Cart</h2>
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              addToCartHandler={addToCartHandler}
              removeFromCartHandler={removeFromCartHandler}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Cart;
