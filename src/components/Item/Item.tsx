import "./Item.scss";
import Button from "../Button/Button"
import Placeholder from "../../assets/placeholder.png";
import Product from "../../types/productType";

type ItemProps = {
    product: Product;
    className: string;
}

const Item = ({product}: ItemProps) => {
    const n = 20;
    const quantityLimit = [...Array(n + 1).keys()];
    const sizeArray = product.variants.map((variant) => variant.size);
    
    return (
        <section className = "item">
            <img className = "item__picture" src={product.image_url} alt="Placeholder item photo" />
            <div className = "item__description">
                <h3 className = "item__value">{product.name}</h3>
                <h3 className = "item__value">${(product.price_cents / 100).toFixed(2)}</h3>
            </div>
            <div className = "item__size-section">
                { sizeArray.length > 1 ?
                    <>
                        <label className = "item__label" htmlFor="item__size">Size</label>
                        <select id="size" name="size">
                            {sizeArray.map((size) => <option key={size} value={size}>{size}</option>)}
                        </select>
                    </>
                : null}
            </div>
            <div className = "item__quantity-section">
                <label className = "item__label">Quantity</label>
                    <select id="quantity" name="quantity">
                        {quantityLimit.map((i) => (
                            <option key={i} value={i}>
                                {i}
                            </option>
                        ))}
                    </select>
            </div>
            <Button text="Add to Cart" className="item__button" />
        </section>
    );
};

export default Item;