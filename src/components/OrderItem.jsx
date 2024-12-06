/* eslint-disable react/prop-types */

const OrderItem = ({ cartItem }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="max-w-[50px]">
          <img
            src={cartItem?.image.thumbnail}
            alt={cartItem?.name}
            className="w-full rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-sm text-rose-900">
            {cartItem?.name}
          </p>
          <div className="font-semibold text-sm flex gap-2">
            <span className="text-rose-900">{cartItem?.quantity}x</span>
            <span className="text-rose-400">
              {" "}
              @ ${cartItem?.price.toFixed(2)}{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="text-black font-semibold">
        ${(cartItem?.price * cartItem?.quantity).toFixed(2)}
      </div>
    </div>
  );
};

export default OrderItem;
