import "./Merch.scss";
import Item from "../Item/Item";

type MerchProps = {
    products?: any[];
    setProducts?: (products: any[]) => void;
}

const Merch = ({products, setProducts}: MerchProps) => {
    return (
        <div className="merch">
            <h1 className="merch__title">Merch</h1>
            <Item  products={products} setProducts={setProducts} />
        </div>
    );

};

export default Merch;
