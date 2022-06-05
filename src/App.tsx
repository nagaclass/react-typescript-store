import { CircularProgress } from "@material-ui/core";

import { useQuery } from "react-query";
import { API_INSTANCE } from "./api/axios.config";
import Product from "./components/Product";
import { PRODUCTS_URL } from "./constants";
import { IProduct } from "./interfaces";

const getProducts = async (): Promise<IProduct[]> => {
  return await API_INSTANCE.get(PRODUCTS_URL).then(res => res.data);
};

const App = () => {
  const { data, isLoading, error } = useQuery<IProduct[]>("products", getProducts);

  // Renders
  const renderProductListItems = () => {
    return (
      <>
        {data?.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </>
    );
  };

  if (isLoading) return <CircularProgress />;
  if (error) return <h1>Oops, Something went wrong!</h1>;

  return (
    <main>
      <div>{renderProductListItems()}</div>
    </main>
  );
};

export default App;
