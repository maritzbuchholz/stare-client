import "./CartItem.scss";
import Button from "../Button/Button"
// import Placeholder from "../../assets/placeholder.png";
import { CartItemType } from "../../types/cartType";

type CartItemProps = {
    key: string;
    name: string;
    price_cents: number;
    quantity: number;
    image_url: string;
    size: string;
}

const CartItem = ({
        key,
        name,
        price_cents,
        quantity,
        image_url,
        size
    }: CartItemProps) => {
    return (
        <section className = "cart-item">
            <img className = "cart-item__thumbnail" src={image_url}/>
            <section className = "cart-item__left">
                <div className = "cart-item__upper">
                    <h2 className = "cart-item__title">{name}</h2>
                    <h3 className = "cart-item__price">${(price_cents / 100).toFixed(2)}</h3>
                    {size === "None" ? null:
                        <>
                            <h3 className = "cart-item__size">{size}</h3>
                        </>
                    }
                </div>
                <div className = "cart-item__lower">
                    <div className = "cart-item__user">    
                        <Button className = "cart-item__button" text="-"></Button>
                        <span className = "cart-item__quantity">{quantity}</span>
                        <Button className = "cart-item__button" text="+"></Button>
                    </div>
                    <Button className = "cart-item__button" text="Delete"></Button>
                </div>
            </section>
            <section className = "cart-item__right">
                <h3 className = "cart-item__subtotal">Subtotal: {(price_cents / 100 * quantity).toFixed(2)}</h3>
            </section>
        </section>
    );
};

export default CartItem;