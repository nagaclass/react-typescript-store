import { useState } from "react";
import { useQuery } from "react-query";
import { IProduct } from "./interfaces";
import { API_INSTANCE } from "./api/axios.config";
import { PRODUCTS_URL } from "./constants";
import Product from "./components/Product";
import AppDrawer from "components/Drawer";
import LoadingSpinner from "components/LoadingSpinner";

const getProducts = async (): Promise<IProduct[]> => {
  return await API_INSTANCE.get(PRODUCTS_URL).then(res => res.data);
};

const App = () => {
  const { data, isLoading, error } = useQuery<IProduct[]>("products", getProducts);
  const [open, setOpen] = useState(false);

  // Handlers
  const addToCartHandler = (selectedProduct: IProduct) => {
    console.log(selectedProduct);
  };

  const opCloseHandler = () => {
    setOpen(!open);
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
      <button onClick={() => setOpen(true)}>Open</button>
      <AppDrawer open={open} onClose={opCloseHandler} />
      <div>{renderProductListItems()}</div>
    </main>
  );
};

export default App;
