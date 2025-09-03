interface Food {
  id?: number | null;
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
  onRemove: (id: number) => void;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onCheckout: () => void;
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
}
