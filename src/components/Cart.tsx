import { X, Minus, Plus } from "lucide-react";

export default function ({
  items,
  onRemove,
  onIncrease,
  onDecrease,
  subtotal,
  tax,
  shipping,
  total,
  onCheckout,
}: CartProps) {
  return (
    <div className="p-6" data-testid="icon">
      <h3
        className="text-center text-2xl font-bold text-gray-800 mb-6"
        data-testid="close"
      >
        Your Cart
      </h3>

      {items.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4 mb-6">
            {items.map((item: CartItem) => (
              <li key={item.id} className="relative bg-gray-50 p-3 rounded-lg">
                <button
                  type="button"
                  onClick={() => onRemove(item.id)}
                  className="absolute right-0 -top-2 w-6 h-6 bg-gray-500 hover:bg-gray-400 text-white rounded-full flex items-center justify-center cursor-pointer"
                  title="Remove item"
                >
                  <X size={14} />
                </button>
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold pb-3">{item.name}</h4>
                  <p className="text-sm text-gray-600">
                    €{item.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      data-testid="decrease"
                      onClick={() => onDecrease(item.id)}
                      className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                    >
                      {""}
                      <Minus size={16} />
                    </button>
                    <span className="font-semibold min-w-[2rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      data-testid="increase"
                      onClick={() => onIncrease(item.id)}
                      className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                    >
                      {""}
                      <Plus size={16} />
                    </button>
                  </div>
                  <span className="font-bold text-red-600">
                    €{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className="pt-4 space-y-2 bg-gray-300 rounded-2xl p-4">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span data-testid="subTotalData">€{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax:</span>
              <span>€{tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>€{shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Total:</span>
              <span>€{total.toFixed(2)}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onCheckout}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold mt-6 cursor-pointer"
          >
            Cash Out
          </button>
        </>
      )}
    </div>
  );
}
