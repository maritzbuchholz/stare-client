import Product from "./productType";
import type { ProductVariant } from "./productType";

type CartItem = {
  product: Product;
  variant: ProductVariant;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

export default CartContextType;
export type { CartItem };
