import Drawer from "@mui/material/Drawer";
import Cart from "components/Cart";
import { IProduct } from "interfaces";

interface AppDrawerProps {
  open: boolean;
  onClose: () => void;
  cartItems: IProduct[];
  addToCartHandler: (selectedProduct: IProduct) => void;
  removeFromCartHandler: (id: number) => void;
}

const AppDrawer: React.FC<AppDrawerProps> = ({
  open,
  onClose,
  cartItems,
  addToCartHandler,
  removeFromCartHandler,
}) => {
  return (
    <Drawer open={open} onClose={onClose} anchor="right">
      <Cart
        cartItems={cartItems}
        addToCartHandler={addToCartHandler}
        removeFromCartHandler={removeFromCartHandler}
      />
    </Drawer>
  );
};

export default AppDrawer;
