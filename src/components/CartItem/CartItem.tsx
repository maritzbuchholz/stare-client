import "./CartItem.scss";
import Button from "../Button/Button"
import Placeholder from "../../assets/placeholder.png";
import { CartItemType } from "../../types/cartType";

const CartItem = () => {
    return (
        <section className = "cart-item">
            <img className = "cart-item__thumbnail" src={Placeholder}/>
            <section className = "cart-item__left">
                <div className = "cart-item__upper">
                    <h2 className = "cart-item__title">Beanie</h2>
                    <h3 className = "cart-item__price">$15</h3>
                </div>
                <div className = "cart-item__lower">
                    <div className = "cart-item__user">    
                        <Button className = "cart-item__button" text="-"></Button>
                        <span className = "cart-item__quantity">6</span>
                        <Button className = "cart-item__button" text="+"></Button>
                    </div>
                    <Button className = "cart-item__button" text="Delete"></Button>
                </div>
            </section>
            <section className = "cart-item__right">
                <h3 className = "cart-item__subtotal">Subtotal: $30</h3>
            </section>
        </section>
    );

};

export default CartItem;