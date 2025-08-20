interface Food {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface CartItem extends Food {
  quantity: number;
}

interface HeaderProps {
  title: string;
}

interface CartProps {
  items: CartItem[];
  onRemove: (id: CartItem["id"]) => void;
  onIncrease: (id: CartItem["id"]) => void;
  onDecrease: (id: CartItem["id"]) => void;
  onCheckout: () => void;
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
}
