interface Food {
  id: number;
  name: string;
  description?: string;
  price: number;
  image?: string;
}

interface CartItem extends Food {
  quantity: number;
}

interface HeaderProps {
  title: string;
}

interface CartProps {
  items: CartItem[];
  onRemove: (id: number | null) => void;
  onIncrease: (id: number | null) => void;
  onDecrease: (id: number | null) => void;
  onCheckout: () => void;
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
}
