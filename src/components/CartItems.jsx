import { CartContext } from "@/context/cartProvider";
import Svgs from "@/utils/Svgs";
import { useContext, useState } from "react";
import CartItem from "./CartItem";
import ConfirmOrderDialog from "./ConfirmOrderDialog";

const CartItems = () => {
  const { cartItems } = useContext(CartContext);

  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className="bg-white rounded-md p-6">
      <h1 className="text-lg font-bold text-rose mb-2">
        Your Cart ({cartItems?.length})
      </h1>

      {cartItems?.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          {Svgs.getSvg("emptyCart")}
          <p className="text-sm font-bold text-green">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {cartItems?.map((cartItem) => (
            <>
              <CartItem key={cartItem.name} cartItem={cartItem} />
              <hr />
            </>
          ))}

          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-rose-500">
              Order Total
            </span>
            <span className="text-black text-lg font-bold">
              $
              {cartItems
                ?.reduce((sum, item) => sum + item.price * item.quantity, 0)
                .toFixed(2)}
            </span>
          </div>

          <div className="flex items-center gap-2 p-2 bg-rose-100 rounded-md justify-center">
            {Svgs.getSvg("carbonNeutral")}
            <p className="text-rose-500 text-sm font-medium">
              This is a <span className="text-black">carbon-neutral</span>{" "}
              delivery.
            </p>
          </div>

          <button
            className="bg-rose py-2 mx-auto w-full rounded-full text-white text-sm hover:bg-rose-900"
            onClick={() => setOpenDialog(true)}
          >
            Confirm Order
          </button>

          <ConfirmOrderDialog
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
          />
        </div>
      )}
    </div>
  );
};

export default CartItems;
