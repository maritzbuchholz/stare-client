import "./Cart.scss";
import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button"

const Cart = () => {
    return (
        <section className = "cart">
            <CartItem />    
        </section>
    );

};

export default Cart;