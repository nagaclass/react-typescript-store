import { useState } from "react";
import { useQuery } from "react-query";
import { IProduct } from "./interfaces";
import { API_INSTANCE } from "./api/axios.config";
import { PRODUCTS_URL } from "./constants";
import Product from "./components/Product";
import AppDrawer from "components/Drawer";
import LoadingSpinner from "components/LoadingSpinner";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge } from "@material-ui/core";

const getProducts = async (): Promise<IProduct[]> => {
  return await API_INSTANCE.get(PRODUCTS_URL).then(res => res.data);
};

const App = () => {
  const { data, isLoading, error } = useQuery<IProduct[]>("products", getProducts);
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as IProduct[]);

  // Handlers
  const addToCartHandler = (selectedProduct: IProduct) => {
    setCartItems(prev => {
      const cartItemExists = prev.find(item => item.id === selectedProduct.id);

      if (cartItemExists) {
        return prev.map(item =>
          item.id === selectedProduct.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...prev, { ...selectedProduct, quantity: 1 }];
    });
  };

  const opCloseHandler = () => {
    setOpen(false);
  };

  // Renders
  const renderProductListItems = () => {
    return (
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data?.map(product => (
          <Product key={product.id} product={product} addToCartHandler={addToCartHandler} />
        ))}
      </div>
    );
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <h1>Oops, Something went wrong!</h1>;

  return (
    <main className="container pt-10 mb-10">
      <Badge
        badgeContent={cartItems.length ? cartItems.length : 0}
        color="error"
        onClick={() => setOpen(true)}
        className="flex justify-end mb-10 cursor-pointer w-full"
        overlap="rectangular"
      >
        <ShoppingCartIcon fontSize="large" />
      </Badge>
      <AppDrawer
        open={open}
        onClose={opCloseHandler}
        cartItems={cartItems}
        addToCartHandler={addToCartHandler}
      />
      <div>{renderProductListItems()}</div>
    </main>
  );
};

export default App;
