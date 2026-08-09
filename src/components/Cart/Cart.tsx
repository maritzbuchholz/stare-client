import "./Cart.scss";
import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button"
import CartContext from "../../context/CartContext";
import { useContext } from 'react';

interface CartProps {
  cartOpen: boolean;
}

const Cart = ({ cartOpen }: CartProps) => {
    const {cart} = useContext(CartContext);
    return (
        <section className = { cart.length === 0  ? "cart__closed" : (cartOpen ? "cart__open" : "cart__closed")}>
            <div className="cart-items">
                {cart.map((item) => (
                    <CartItem
                    key={item.variant.sku}
                    sku={item.variant.sku}
                    name={item.product.name}
                    price_cents={item.product.price_cents}
                    quantity={item.quantity}
                    image_url={item.product.image_url}
                    size={item.variant.size}
                    />))}
            </div>
            <div className="cart-bottom">
                <Button text="Checkout" />
            </div>
        </section>
    );

};

export default Cart;