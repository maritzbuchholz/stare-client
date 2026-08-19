import { useState, Dispatch, SetStateAction, useContext } from "react";
import StareLogoTrasparent from "../../assets/logo/stareLogoTransparent.png";
import Cart from "../../assets/icons/cart.svg";
import fullCart from "../../assets/icons/fullCart.svg";
import Burger from "../../assets/icons/burger.svg";
import Close from "../../assets/icons/close.svg";
import CartContext from "../../context/CartContext";
import "./NavBar.scss";

type NavBarProps = {
  cartOpen: boolean;
  setCartOpen: Dispatch<SetStateAction<boolean>>;
}

const NavBar = ({ cartOpen, setCartOpen }: NavBarProps) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const {cart} = useContext(CartContext);
    return (
        <header className = "nav">
            <div className = "nav__top">
                <div className = "nav__logo">
                    <img src={StareLogoTrasparent} alt="Stare Logo" />
                </div>
                
                <button className="nav__burger" onClick={() => setMenuOpen(!menuOpen)}>
                    <img src={menuOpen ? Close : Burger} alt="Menu Item" className="nav__menu-image" />
                </button>

                <nav className={"nav__tabs-tablet"}>
                    <a className='nav__link' href="#hero">Home</a>
                    <a className='nav__link' href="#about">About</a>
                    <a className='nav__link' href="#tour">Tour</a>
                    <a className='nav__link' href="#merch">Merch</a>
                </nav>

                <div className = "nav__cart">
                    <button onClick={() => setCartOpen(!cartOpen)} className = "nav__cart-button">
                        <img src={cart.length === 0 ? Cart : (cartOpen ? Close : fullCart)} alt="Shopping Cart" className="nav__cart-image" />
                    </button>
                </div>
            </div>

            <nav className={`nav__tabs-mobile ${menuOpen ? "nav__tabs-mobile--open" : ""}`}>
                <a className='nav__link' href="#hero">Home</a>
                <a className='nav__link' href="#about">About</a>
                <a className='nav__link' href="#tour">Tour</a>
                <a className='nav__link' href="#merch">Merch</a>
            </nav>
        </header>
    );

};

export default NavBar;
