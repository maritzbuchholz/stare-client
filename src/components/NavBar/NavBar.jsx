import { useState } from "react";
import StareLogoTrasparent from "../../assets/logo/stareLogoTransparent.png";
import Cart from "../../assets/icons/cart.svg";
import "./NavBar.scss";


const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className = "nav">
            <div className = "nav__logo">
                <img src={StareLogoTrasparent} alt="Stare Logo" />
            </div>
            
            <button class="nav__burger" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>

            <nav className={`nav__tabs ${menuOpen ? "nav__tabs--open" : ""}`}>
                <a className='nav__link' href="#about">About</a>
                <a className='nav__link' href="#tour">Tour</a>
                <a className='nav__link' href="#merch">Merch</a>
            </nav>

            <div className = "nav__cart">
                <img src={Cart} alt="Shopping Cart" />
            </div>
        </header>
    );

};

export default NavBar;
