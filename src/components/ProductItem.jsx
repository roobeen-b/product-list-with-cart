/* eslint-disable react/prop-types */
import { CartContext } from "@/context/cartProvider";
import Svgs from "@/utils/Svgs";
import { useContext } from "react";
import ProductImage from "./ProductImage";

const ProductItem = ({ product }) => {
  const { cartItems, addItemToCart, decrementItemFromCart } =
    useContext(CartContext);

  const currentCartProductIndex = cartItems?.findIndex(
    (cartItem) => cartItem.name === product.name
  );
  const isCurrentProductInCart = currentCartProductIndex !== -1;

  return (
    <div className={`min-h-[300px] min-w-[200px] `}>
      <div
        className={`w-full h-[200px] rounded-md relative ${
          isCurrentProductInCart && "border-2 border-rose"
        }`}
      >
        <ProductImage image={product.image} name={product.name} />
        {!isCurrentProductInCart ? (
          <div
            className="w-[150px] h-10 absolute -bottom-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-white text-center rounded-full border border-rose-500 text-sm font-semibold flex items-center gap-2 whitespace-nowrap cursor-pointer"
            onClick={() => addItemToCart(product)}
          >
            {Svgs.getSvg("addToCart")}
            Add to cart
          </div>
        ) : (
          <div className="w-[150px] h-10 absolute -bottom-5 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-rose text-center rounded-full flex justify-between items-center ">
            <span
              onClick={() => decrementItemFromCart(product)}
              className="border border-white px-1 py-2 rounded-full hover:bg-white hover:fill-rose"
            >
              {Svgs.getSvg("decrementQuantity")}
            </span>
            <span className="text-white">
              {cartItems &&
                cartItems[currentCartProductIndex] &&
                cartItems[currentCartProductIndex].quantity}
            </span>
            <span
              onClick={() => addItemToCart(product)}
              className="border border-white p-1 rounded-full hover:bg-white hover:fill-rose"
            >
              {Svgs.getSvg("incrementQuantity")}
            </span>
          </div>
        )}
      </div>
      <div className="pt-10">
        <p className="text-green text-sm font-medium">{product.category}</p>
        <p className="font-semibold">{product.name}</p>
        <p className="text-rose font-semibold">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductItem;
