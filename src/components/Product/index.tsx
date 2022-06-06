import { IProduct } from "interfaces";
import { textSlicer } from "utils";

interface Props {
  product: IProduct;
  addToCartHandler: (selectedProduct: IProduct) => void;
}

const Product: React.FC<Props> = ({ product, addToCartHandler }) => {
  const { title, image, price, description } = product;

  return (
    <div
      className="flex flex-col justify-between border-2 border-slate-500 rounded-lg p-5 text-center"
      title={title}
    >
      <img src={image} alt={title} className="max-h-60 object-cover mx-auto" />
      <div>
        <h6 className="text-sm mt-10 font-semibold">{textSlicer(title, 30)}</h6>
        <p className="text-sm mt-5 font-semibold">{textSlicer(description, 100)}</p>
        <h6 className="font-semibold mt-5">${price}</h6>
        <button
          className="bg-slate-700 hover:bg-slate-500 w-full text-white py-2 rounded-md cursor-pointer mt-5 uppercase font-bold text-sm"
          onClick={() => addToCartHandler(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
