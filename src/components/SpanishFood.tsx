"use client";

import { useEffect, useState } from "react";
import { ShoppingCart, Plus } from "lucide-react";
import spanishFoods from "@/data/spanishData";
import Cart from "./Cart";
import Header from "./Header";

const SpanishFood = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  useEffect(() => {
    const storedCart = localStorage.getItem("spanishFoodCart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("spanishFoodCart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (food: Food): void => {
    setCart((prev: CartItem[]) => {
      if (!food.id) {
        console.error("Item missing id:", food);
        return prev;
      }

      const existingItem = prev.find((item) => item.id === food.id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...food, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (itemId: number): void => {
    setCart((prev: CartItem[]) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId: number): void => {
    setCart((prev: CartItem[]) =>
      prev
        .map((item) =>
          item.id === itemId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (itemId: number): void => {
    setCart((prev: CartItem[]) => prev.filter((item) => item.id !== itemId));
  };

  const calculateSubtotal = (): number => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const calculateTax = (subtotal: number): number => {
    return subtotal * 0.07;
  };

  const calculateShipping = (): number => {
    return 6.0;
  };

  const calculateTotal = (): number => {
    const subtotal = calculateSubtotal();
    const tax = calculateTax(subtotal);
    const shipping = calculateShipping();
    return subtotal + tax + shipping;
  };

  const handleCheckout = (): void => {
    const total = calculateTotal();
    console.log("Checked out. Total:", total.toFixed(2));
    setCart([]);
    setIsCartOpen(false);
    alert(`Total is €${total.toFixed(2)}`);
  };

  const toggleCart = (): void => {
    setIsCartOpen(!isCartOpen);
  };

  const getTotalItemCount = (): number => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <div data-testid="spanishInfo" className="min-h-screen bg-black">
      <header className="shadow-lg">
        <div className="w-full flex justify-between items-center bg-amber-400">
          <Header title="Spanish Food" />
          {isCartOpen && (
            <div
              className="fixed inset-0 z-50 bg-black bg-opacity-50"
              onClick={toggleCart}
            >
              <div
                className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl overflow-y-auto"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                data-testid="cart"
              >
                <Cart
                  items={cart}
                  onRemove={removeFromCart}
                  onIncrease={increaseQuantity}
                  onDecrease={decreaseQuantity}
                  subtotal={calculateSubtotal()}
                  tax={calculateTax(calculateSubtotal())}
                  shipping={calculateShipping()}
                  total={calculateTotal()}
                  onCheckout={handleCheckout}
                />
              </div>
            </div>
          )}

          <button
            onClick={toggleCart}
            className="relative p-2 text-red-600 hover:text-red-800 transition-colors"
            data-testid="icon"
          >
            <ShoppingCart size={32} />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                {getTotalItemCount()}
              </span>
            )}
          </button>
        </div>
      </header>

      <div className="max-w-lg md:max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {spanishFoods.map((food: Food) => (
            <div
              key={food.id}
              className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              data-testid="foodCard"
            >
              <div className="w-full h-60 overflow-hidden">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {food.name}
                </h3>
                <p className="text-gray-600 mb-4">{food.description}</p>
                <span className="text-2xl font-bold text-red-600">
                  €{food.price.toFixed(2)}
                </span>
                <button
                  type="button"
                  onClick={() => addToCart(food)}
                  className="absolute bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg flex items-center gap-2 transition-colors cursor-pointer"
                >
                  {""}
                  <Plus size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpanishFood;
