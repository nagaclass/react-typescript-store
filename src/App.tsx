import LoadingSpinner from "components/LoadingSpinner";

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

  // Handlers
  const addToCartHandler = (selectedProduct: IProduct) => {
    console.log(selectedProduct);
  };

  // Renders
  const renderProductListItems = () => {
    return (
      <div className="grid grid-cols-4 gap-4">
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
      <div>{renderProductListItems()}</div>
    </main>
  );
};

export default App;
