import "./CartItem.scss";
import { Dispatch, SetStateAction, useContext } from "react";
import CartContext from "../../context/CartContext";

const MAX_QUANTITY = 10;

type CartItemProps = {
    sku: string;
    name: string;
    price_cents: number;
    quantity: number;
    image_url: string;
    size: string;
    setCartOpen: Dispatch<SetStateAction<boolean>>;
}

const formatPrice = (cents: number) => `$${(cents / 100).toFixed(2)}`;

const CartItem = ({
    sku,
    name,
    price_cents,
    quantity,
    image_url,
    size,
    setCartOpen
}: CartItemProps) => {
    const { cart, setCart } = useContext(CartContext);

    const onDelete = () => {
        setCart((prevCart) =>
            prevCart.filter((item) => item.variant.sku !== sku)
        );
        if (cart.length === 1) {
            setCartOpen(false);
        }
    }

    const onDecrement = () => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.variant.sku === sku && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    }

    const onIncrement = () => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.variant.sku === sku && item.quantity < MAX_QUANTITY
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    }

    return (
        <article className="cart-item">
            <img className="cart-item__thumbnail" src={image_url} alt={name} />
            <div className="cart-item__details">
                <div className="cart-item__header">
                    <div className="cart-item__info">
                        <h2 className="cart-item__title">{name}</h2>
                        <p className="cart-item__price">{formatPrice(price_cents)} each</p>
                        {size === "None" ? null :
                            <p className="cart-item__size">Size: {size}</p>
                        }
                    </div>
                    <button
                        className="cart-item__delete"
                        onClick={onDelete}
                        aria-label={`Remove ${name} from cart`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M4 7l16 0" />
                            <path d="M10 11l0 6" />
                            <path d="M14 11l0 6" />
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>
                    </button>
                </div>
                <div className="cart-item__footer">
                    <div className="cart-item__stepper">
                        <button
                            className="cart-item__step"
                            onClick={onDecrement}
                            disabled={quantity <= 1}
                            aria-label="Decrease quantity"
                        >
                            &minus;
                        </button>
                        <span className="cart-item__quantity">{quantity}</span>
                        <button
                            className="cart-item__step"
                            onClick={onIncrement}
                            disabled={quantity >= MAX_QUANTITY}
                            aria-label="Increase quantity"
                        >
                            +
                        </button>
                    </div>
                    <p className="cart-item__line-total">
                        Line total: <strong>{formatPrice(price_cents * quantity)}</strong>
                    </p>
                </div>
            </div>
        </article>
    );
};

export default CartItem;
