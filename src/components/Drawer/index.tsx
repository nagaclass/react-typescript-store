import Drawer from "@mui/material/Drawer";

interface AppDrawerProps {
  open: boolean;
  onClose: () => void;
}

const AppDrawer: React.FC<AppDrawerProps> = ({ open, onClose }) => {
  return (
    <Drawer open={open} onClose={onClose} anchor="right">
      <h1>App Drawer</h1>
    </Drawer>
  );
};

export default AppDrawer;
