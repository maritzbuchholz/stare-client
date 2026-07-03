import "./Item.scss";
import Button from "../Button/Button"
import Placeholder from "../../assets/placeholder.png";

const Item = () => {
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
                <input type="number" id="quantity" name="quantity" min="0" max="100" step="1" />
            </div>
            <Button text="Add to Cart" classname="item__button" />
        </section>
    );

};

export default Item;