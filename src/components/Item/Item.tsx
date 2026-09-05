import "./Item.scss";
import Button from "../Button/Button"
import Product from "../../types/productType";
import { useContext } from 'react';
import CartContext from "../../context/CartContext";
import type { SubmitEvent } from "react";
// import Placeholder from "../../assets/placeholder.png";


type ItemProps = {
    product: Product;
    className: string;
}

const Item = ({product}: ItemProps) => {
    const n = 10;
    const quantityLimit = [...Array(n + 1).keys()];
    const sizeArray = product.variants.map((variant) => variant.size).reverse();
    const {setCart} = useContext(CartContext);
    
    const addToCart = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const size = (formData.get("size") as string | null) ?? sizeArray[0];
        const quantity = Number(formData.get("quantity"));
        const variant = product.variants.find((variant) => variant.size === size);

        // Guard clause of either no variant or quantity:
        if (!variant || quantity <= 0) return;

        setCart((prevCart) => {
            // Checks if a variant is already in a cart. If so, set existingIndex to index. Else, set existingIndex to -1 by default.
            const existingIndex = prevCart.findIndex(
                (item) => item.variant.sku === variant.sku
            );

            
            if (existingIndex !== -1) {
                //Update if it variant already exists
                const updated = [...prevCart];
                updated[existingIndex] = {
                    ...updated[existingIndex],
                    quantity: updated[existingIndex].quantity + quantity,
                };
                return updated;
            } else {
                //Add new if it variant doesn't already exist
                return [...prevCart, { product, variant, quantity }];
            }
        });

        form.reset();
    }

    return (
        <form onSubmit={addToCart} className = "item">
            <img className = "item__picture" src={product.image_url} alt="Placeholder item photo" />
            <h3 className = "item__value item__name">{product.name}</h3>
            <h3 className = "item__value item__price">${(product.price_cents / 100).toFixed(2)} each</h3>
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
            <Button type="submit" text="Add to Cart" className="item__button" />
        </form>
    );
};

export default Item;