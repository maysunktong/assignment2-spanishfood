"use client";
import { useState, useEffect } from "react";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import spanishFoods from "@/data/spanishData";
import Header from "./Header";

const SpanishFood = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem("spanishFoodCart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("spanishFoodCart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (food) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === food.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...food, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === itemId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const calculateSubtotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const calculateTax = (subtotal) => {
    return subtotal * 0.07;
  };

  const calculateShipping = () => {
    return 6.0;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const tax = calculateTax(subtotal);
    const shipping = calculateShipping();
    return subtotal + tax + shipping;
  };

  const handleCheckout = () => {
    const total = calculateTotal().toFixed(2);
    alert(`Thank you for your order! Total: €${total}`);
    setCart([]);
    setIsCartOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div data-testid="spanishInfo" className="min-h-screen bg-black">
      <header className="shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center bg-amber-500  ">
          <div className="w-full">
            <Header title="Spanish Food" />
            {isCartOpen && (
              <div className="fixed inset-0 z-50 bg-none" onClick={toggleCart}>
                <div
                  className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                  data-testid="cart"
                >
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                      Your Cart
                    </h2>

                    {cart.length === 0 ? (
                      <p className="text-gray-500">Your cart is empty</p>
                    ) : (
                      <>
                        <ul className="space-y-4 mb-6">
                          {cart.map((item) => (
                            <li
                              key={item.id}
                              className="bg-gray-50 p-3 rounded-lg"
                            >
                              <div className="flex justify-between items-center mb-2">
                                <h4 className="font-semibold">{item.name}</h4>
                                <p className="text-sm text-gray-600">
                                  €{item.price.toFixed(2)} each
                                </p>
                              </div>
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                  <button
                                    onClick={() => decreaseQuantity(item.id)}
                                    className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                                  >
                                    <Minus size={16} />
                                  </button>
                                  <span className="font-semibold min-w-[2rem] text-center">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() => increaseQuantity(item.id)}
                                    className="w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors"
                                  >
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
                            <span data-testid="subTotalData">
                              €{calculateSubtotal().toFixed(2)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Tax (7%):</span>
                            <span>
                              €{calculateTax(calculateSubtotal()).toFixed(2)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Shipping:</span>
                            <span>€{calculateShipping().toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between font-bold text-lg border-t pt-2">
                            <span>Total:</span>
                            <span>€{calculateTotal().toFixed(2)}</span>
                          </div>
                        </div>

                        <button
                          onClick={handleCheckout}
                          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold mt-6 transition-colors"
                        >
                          Cash Out
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={toggleCart}
            className="relative p-2 text-red-600 hover:text-red-800 transition-colors"
            data-testid="icon"
          >
            <ShoppingCart size={32} />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {spanishFoods.map((food) => (
            <div
              key={food.id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              data-testid="foodCard"
            >
              <div className="p-6 pb-16">
                <div className="w-full h-50 overflow-hidden">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {food.name}
                </h3>
                <p className="text-gray-600 mb-4">{food.description}</p>
                <span className="text-2xl font-bold text-red-600">
                  €{food.price.toFixed(2)}
                </span>
              </div>
              <button
                onClick={() => addToCart(food)}
                className="absolute bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white p-1 rounded-full shadow-lg flex items-center gap-2 transition-colors aspect-square cursor-pointer"
              >
                <Plus size={30} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpanishFood;
