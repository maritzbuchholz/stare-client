import { NavLink } from "react-router-dom";
import StareLogo from "../../assets/logo/stareLogo.png";
import Cart from "../../assets/icons/cart.svg";
import "./NavBar.scss";


const NavBar = () => {
    return (
        <header className = "nav">
            <div className = "nav__logo">
                <img src={StareLogo} alt="Stare Logo" />
            </div> 

            <nav className = "nav__tabs">
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
