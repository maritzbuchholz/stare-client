import "./Cart.scss";
import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button"
import CartContext from "../../context/CartContext";
import { useState, Dispatch, SetStateAction, useContext } from 'react';

type CartProps = {
  cartOpen: boolean;
  setCartOpen: Dispatch<SetStateAction<boolean>>;
}

const Cart = ({ cartOpen, setCartOpen }: CartProps) => {
    const {cart} = useContext(CartContext);
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
            <div className="cart__bottom">
                <Button text="Checkout" />
            </div>
        </section>
    );

};

export default Cart;