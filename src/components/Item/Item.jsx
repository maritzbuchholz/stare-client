import "./Item.scss";
import Button from "../Button/Button.jsx"
import Placeholder from "../../assets/placeholder.png";

const Item = () => {
    return (
        <section className = "item">
            <img className = "item__picture" src={Placeholder} alt="Placeholder item photo" />
            <p className = "item__text">Beanie</p>
            <p className = "item__text">Size</p>
            <p className = "item__text">Quantity</p>
            <Button text="Add to Cart" />
        </section>
    );

};

export default Item;