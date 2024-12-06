import { CartContext } from "@/context/cartProvider";
import Svgs from "@/utils/Svgs";
import { useContext } from "react";

/* eslint-disable react/prop-types */
const CartItem = ({ cartItem }) => {
  const { removeItemFromCart } = useContext(CartContext);

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-sm text-rose-900">{cartItem?.name}</p>
        <div className="font-semibold text-sm flex gap-2">
          <span className="text-rose-900">{cartItem?.quantity}x</span>
          <span className="text-rose-400">
            {" "}
            @ ${cartItem?.price.toFixed(2)}{" "}
          </span>
          <span className="text-rose-500">
            ${(cartItem?.price * cartItem?.quantity).toFixed(2)}
          </span>
        </div>
      </div>
      <button
        className="p-0.5 border border-rose-400 rounded-full hover:border-rose-900 hover:fill-rose-900"
        onClick={() => removeItemFromCart(cartItem)}
      >
        {Svgs.getSvg("removeItem")}
      </button>
    </div>
  );
};

export default CartItem;
