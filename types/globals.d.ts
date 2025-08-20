interface Food {
  id: string | number;
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
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  onCheckout: () => void;
}
