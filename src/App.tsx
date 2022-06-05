import { useQuery } from "react-query";
import { API_INSTANCE } from "./api/axios.config";
import { PRODUCTS_URL } from "./constants";
import { IProduct } from "./interfaces";

const getProducts = async (): Promise<IProduct[]> => {
  return await API_INSTANCE.get(PRODUCTS_URL).then(res => res.data);
};

const App = () => {
  const { data, isLoading } = useQuery<IProduct[]>("products", getProducts);

  // Renders
  const renderProductListItems = () => {
    return (
      <>
        {data?.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </>
    );
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <ul>{renderProductListItems()}</ul>
    </div>
  );
};

export default App;
