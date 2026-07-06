import "./Item.scss";
import Button from "../Button/Button"
import Placeholder from "../../assets/placeholder.png";
import { useState } from "react";

type ItemProps = {
    products?: any[];
    setProducts?: (products: any[]) => void;
}

const Item = ({products, setProducts}: ItemProps) => {
    const [quantity, setQuantity] = useState(0);
    const decrementQuantity = () => {
        setQuantity(prev => Math.max(0, prev - 1));
    };
    const incrementQuantity = () => {
        setQuantity(prev => Math.min(15, prev + 1));
    };
    return (
        <section className = "item">
            <img className = "item__picture" src={Placeholder} alt="Placeholder item photo" />
            <h3 className = "item__description">Shirt</h3>
            <div className = "item__size-section">
                <label className = "item__label" htmlFor="item__size">Size</label>
                <select id="size" name="size">
                    <option value="small">S</option>
                    <option value="medium">M</option>
                    <option value="large">L</option>
                    <option value="xl">XL</option>
                </select>
            </div>
            <div className = "item__quantity-section">
                <label className = "item__label">Quantity</label>
                <div className="item__quantity-controls">
                    <Button onClick={decrementQuantity} text="-" classname="item__quantity-btn" />
                    <input type="number" id="quantity" name="quantity" min="0" max="15" step="1" value={quantity} readOnly />
                    <Button onClick={incrementQuantity} text="+" classname="item__quantity-btn" />
                </div>
            </div>
            <Button text="Add to Cart" classname="item__button" />
        </section>
    );

};

export default Item;