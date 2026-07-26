import "./CartItem.scss";
import Button from "../Button/Button"
import Placeholder from "../../assets/placeholder.png";



const CartItem = () => {
    return (
        <section className = "cart-item">
            <img src={Placeholder}/>
            <section className = "cart-item__left">
                <h3 className = "cart-item__title">Beanie</h3>
                <h2 className = "cart-item__price">$15</h2>
                <div className = "cart-item__lower">
                    <div>    
                        <button>-</button>
                        <span>6</span>
                        <button>+</button>
                    </div>
                    <button>delete</button>
                </div>
            </section>
            <section className = "cart-item__right">
                <h2 className = "cart-item__subtotal">Subtotal: $30</h2>
            </section>
        </section>
    );

};

export default CartItem;