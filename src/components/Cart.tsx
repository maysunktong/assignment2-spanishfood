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
      <h3 className="text-2xl font-bold text-gray-800 mb-6" data-testid="close">
        Your Cart
      </h3>

      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4 mb-6">
            {items.map((item: CartItem) => (
              <li key={item.id} className="bg-gray-50 p-3 rounded-lg">
                <button
                  type="button"
                  onClick={() => onRemove(item.id)}
                  className="w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors"
                  title="Remove item"
                >
                  <X size={14} />
                </button>
                <div className="flex justify-between items-center mb-2 pr-8">
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-600">
                    €{item.price.toFixed(2)} each
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      data-testid="decrease"
                      onClick={() => onDecrease(item.id)}
                      className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
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
                      className="w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors"
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

          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span data-testid="subTotalData">€{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (7%):</span>
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
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold mt-6 transition-colors"
          >
            Cash Out
          </button>
        </>
      )}
    </div>
  );
}
