import "./Merch.scss";
import Item from "../Item/Item";
import Product from "../../types/productType";

type MerchProps ={
    products: Product[];
}

const Merch = ({products}: MerchProps) => {
    return (
        <div className="merch" id="merch">
            <h1 className="merch__title">Merch</h1>
            <div className="merch__container">
                {products.map((product) => <Item className = "merch__item" product={product} key={product.id} />)}
            </div>
        </div>
    );

};

export default Merch;
