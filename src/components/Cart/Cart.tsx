import "./Cart.scss";
import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button"
import CartContext from "../../context/CartContext";
import { useContext } from 'react';



const Cart = () => {
    const {cart} = useContext(CartContext);
    return (
        <section className = "cart">
            {cart.map((item) => (
                <CartItem
                key={item.variant.sku}
                name={item.product.name}
                price_cents={item.product.price_cents}
                quantity={item.quantity}
                image_url={item.product.image_url}
                size={item.variant.size}
                />))}
        </section>
    );

};

export default Cart;