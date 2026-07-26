import "./CartItem.scss";
import Button from "../Button/Button"
import Placeholder from "../../assets/placeholder.png";



const CartItem = () => {
    return (
        <section className = "cart-item">
            <div className = "cart-item__left">
                <img src={Placeholder}/>
            </div>
            <div className = "cart-item__right">
                <h3 className = "cart-item__title">Beanie</h3>
                <h2></h2>
            </div>
        </section>
    );

};

export default CartItem;