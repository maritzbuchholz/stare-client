import "./Item.scss";
import Button from "../Button/Button"
import Placeholder from "../../assets/placeholder.png";
import Product from "../../types/product";

type ItemProps = {
    product: Product;
}

const Item = ({product}: ItemProps) => {
    const n = 30;
    const quantityLimit = [...Array(n + 1).keys()];
    const sizeArray = product.variants.map((variant) => variant.size);
    return (
        <section className = "item">
            <img className = "item__picture" src={Placeholder} alt="Placeholder item photo" />
            <h3 className = "item__description">{product.name}</h3>
            <div className = "item__size-section">
                { sizeArray.length > 1 ?
                <>
                    <label className = "item__label" htmlFor="item__size">Size</label>
                    <select id="size" name="size">
                        {sizeArray.map((size) => <option value={size}>{size}</option>)}
                    </select>
                </>
                : null}
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