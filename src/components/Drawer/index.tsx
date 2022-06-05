import Drawer from "@mui/material/Drawer";
import Cart from "components/Cart";
import { IProduct } from "interfaces";

interface AppDrawerProps {
  open: boolean;
  onClose: () => void;
  cartItems: IProduct[];
}

const AppDrawer: React.FC<AppDrawerProps> = ({ open, onClose, cartItems }) => {
  return (
    <Drawer open={open} onClose={onClose} anchor="right">
      <Cart cartItems={cartItems} />
    </Drawer>
  );
};

export default AppDrawer;
