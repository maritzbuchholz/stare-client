import "./Item.scss";
import Button from "../Button/Button"
import Placeholder from "../../assets/placeholder.png";
import { useState } from "react";

type ItemProps = {
    products?: any[];
    setProducts?: (products: any[]) => void;
}

const Item = ({products, setProducts}: ItemProps) => {
    const n = 30;
    const quantityLimit = [...Array(n + 1).keys()];
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
                    <select id="quantity" name="quantity">
                        {quantityLimit.map((i) => (
                            <option key={i} value={i}>
                                {i}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <Button text="Add to Cart" classname="item__button" />
        </section>
    );

};

export default Item;