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
                />))}
        </section>
    );

};

export default Cart;