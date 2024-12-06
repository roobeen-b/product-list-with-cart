/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CartContext } from "@/context/cartProvider";
import { useContext } from "react";
import OrderItem from "./OrderItem";
import Svgs from "@/utils/Svgs";

const ConfirmOrderDialog = ({ openDialog, setOpenDialog }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent className="max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="text-left">
            {Svgs.getSvg("orderConfirmed")}
            <h1 className="text-2xl font-bold mt-2">Order Confirmed</h1>
            <p className="text-rose-400 text-sm font-medium mb-2">
              We hope you enjoyed your food!
            </p>
          </DialogTitle>
          <DialogDescription className="bg-rose-100 rounded-md p-6 flex flex-col gap-4">
            {cartItems?.map((cartItem) => (
              <>
                <OrderItem key={cartItem.name} cartItem={cartItem} />
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
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <button className="bg-rose py-2 mx-auto w-full rounded-full text-white text-sm hover:bg-rose-900">
            Start New Order
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmOrderDialog;
