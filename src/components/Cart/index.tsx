import { IProduct } from "interfaces";

interface Props {
  cartItems: IProduct[];
}

const Cart: React.FC<Props> = ({ cartItems }) => {
  return (
    <div className="w-80 p-5">
      {!cartItems.length ? (
        <h2>No items in your Cart!</h2>
      ) : (
        cartItems.map(item => <h4 key={item.id}>{item.title}</h4>)
      )}
    </div>
  );
};

export default Cart;
