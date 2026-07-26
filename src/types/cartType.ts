import Product from "./productType";
import type { ProductVariant } from "./productType";

type CartItemType = {
  product: Product;
  variant: ProductVariant;
  quantity: number;
};

type CartContextType = {
  cart: CartItemType[];
  setCart: React.Dispatch<React.SetStateAction<CartItemType[]>>;
};

export default CartContextType;
export type { CartItemType };
