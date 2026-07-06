import "./Merch.scss";
import Item from "../Item/Item";
import Product from "../../types/product";

type MerchProps ={
    products: Product[];
}

const Merch = ({products}: MerchProps) => {
    console.log(products);
    return (
        <div className="merch">
            <h1 className="merch__title">Merch</h1>
            {products.map((product) => <Item product={product} key={product.id} />)}
        </div>
    );

};

export default Merch;
