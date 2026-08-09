import { useState, Dispatch, SetStateAction } from "react";
import StareLogoTrasparent from "../../assets/logo/stareLogoTransparent.png";
import Cart from "../../assets/icons/cart.svg";
import Burger from "../../assets/icons/burger.svg";
import Close from "../../assets/icons/close.svg";
import "./NavBar.scss";

interface NavBarProps {
  cartOpen: boolean;
  setCartOpen: Dispatch<SetStateAction<boolean>>;
}

const NavBar = ({ cartOpen, setCartOpen }: NavBarProps) => {
    const [menuOpen, setMenuOpen] = useState(false);

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
                    <a className='nav__link' href="#about">Home</a>
                    <a className='nav__link' href="#about">About</a>
                    <a className='nav__link' href="#tour">Tour</a>
                    <a className='nav__link' href="#merch">Merch</a>
                </nav>

                <div className = "nav__cart">
                    <button onClick={() => setCartOpen(!cartOpen)} className = "nav__cart-button">
                        <img src={cartOpen ? Close : Cart} alt="Shopping Cart" className="nav__cart-image" />
                    </button>
                </div>
            </div>

            <nav className={`nav__tabs-mobile ${menuOpen ? "nav__tabs-mobile--open" : ""}`}>
                <a className='nav__link' href="#about">Home</a>
                <a className='nav__link' href="#about">About</a>
                <a className='nav__link' href="#tour">Tour</a>
                <a className='nav__link' href="#merch">Merch</a>
            </nav>
        </header>
    );

};

export default NavBar;
