import "./Cart.scss";
const baseUrl = import.meta.env.VITE_API_BASE_URL;
import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button"
import CartContext from "../../context/CartContext";
import { Dispatch, SetStateAction, useContext } from 'react';
import axios from "axios";

type CartProps = {
  cartOpen: boolean;
  setCartOpen: Dispatch<SetStateAction<boolean>>;
}

const formatPrice = (cents: number) => `$${(cents / 100).toFixed(2)}`;

const Cart = ({ cartOpen, setCartOpen }: CartProps) => {
    const { cart } = useContext(CartContext);

    const subtotalCents = cart.reduce(
        (sum, item) => sum + item.product.price_cents * item.quantity,
        0
    );

    const onCheckout = async () => {
        try {
            const items = cart.map((item) => ({ quantity: item.quantity, sku: item.variant.sku }));
            const res = await axios.post(`${baseUrl}/create-checkout-session`, { items });
            window.location.href = res.data.url;
        } catch (error) {
            console.error(`Failed to checkout`, error);
        }
    };

    return (
        <section className={cartOpen && cart.length > 0 ? "cart-open" : "cart-closed"}>
            <div className="cart__items">
                {cart.map((item) => (
                    <CartItem
                    key={item.variant.sku}
                    sku={item.variant.sku}
                    name={item.product.name}
                    price_cents={item.product.price_cents}
                    quantity={item.quantity}
                    image_url={item.product.image_url}
                    size={item.variant.size}
                    setCartOpen={setCartOpen}
                    />))}
            </div>
            <div className="cart__summary">
                <div className="cart__summary-row">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotalCents)}</span>
                </div>
                <div className="cart__summary-row">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                </div>
                <div className="cart__summary-row cart__summary-row--total">
                    <span>Total</span>
                    <span>{formatPrice(subtotalCents)}</span>
                </div>
            </div>
            <Button onClick={onCheckout} className="cart__checkout" text="Checkout" />
        </section>
    );

};

export default Cart;
