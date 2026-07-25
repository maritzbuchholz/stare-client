import { createContext } from 'react';
import CartContextType from '../types/cartType';

const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
});

export default CartContext;