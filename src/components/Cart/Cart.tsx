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

const Cart = ({ cartOpen, setCartOpen }: CartProps) => {
    const {cart} = useContext(CartContext);
    const onClick = () => {
        const checkout = async () => {
            try {
                const res = await axios.post(`${baseUrl}/create-checkout-session`);
                window.location.href = res.data.url;
            } catch (error) {
                console.error(`Failed to checkout`, error);
            }
        };
        checkout()
    };
    return (
        <section className = { cart.length === 0  ? "cart-closed" : (cartOpen ? "cart-open" : "cart-closed")}>
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
            <div onClick={onClick} className="cart__bottom">
                <Button text="Checkout" />
            </div>
        </section>
    );

};

export default Cart;