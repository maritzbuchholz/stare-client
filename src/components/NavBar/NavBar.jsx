import { useState } from "react";
import StareLogoTrasparent from "../../assets/logo/stareLogoTransparent.png";
import Cart from "../../assets/icons/cart.svg";
import Burger from "../../assets/icons/burger.svg";
import Close from "../../assets/icons/close.svg";
import "./NavBar.scss";


const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className = "nav">
            <div className = "nav__top">
                <div className = "nav__logo">
                    <img src={StareLogoTrasparent} alt="Stare Logo" />
                </div>
                
                <button class="nav__burger" onClick={() => setMenuOpen(!menuOpen)}>
                    <img src={menuOpen ? Close : Burger} alt="Menu Item" />
                </button>

                <nav className={"nav__tabs-tablet"}>
                    <a className='nav__link' href="#about">About</a>
                    <a className='nav__link' href="#tour">Tour</a>
                    <a className='nav__link' href="#merch">Merch</a>
                </nav>

                <div className = "nav__cart">
                    <img src={Cart} alt="Shopping Cart" />
                </div>
            </div>

            <nav className={`nav__tabs-mobile ${menuOpen ? "nav__tabs-mobile--open" : ""}`}>
                <a className='nav__link' href="#about">About</a>
                <a className='nav__link' href="#tour">Tour</a>
                <a className='nav__link' href="#merch">Merch</a>
            </nav>
        </header>
    );

};

export default NavBar;
