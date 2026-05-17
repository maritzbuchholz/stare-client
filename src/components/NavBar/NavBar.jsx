import { NavLink } from "react-router-dom";
import StareLogo from "../../assets/logo/stareLogo.png";
import "./NavBar.scss";


const NavBar = () => {
    return (
        <header className = "nav">
            <div className = "nav__logo">
                <img src={StareLogo} alt="Stare Logo" />
            </div> 

            <nav className = "nav__tabs">
                <a className='nav-bar__link' href="#about">About</a>
                <a className='nav-bar__link' href="#skills">Tour</a>
                <a className='nav-bar__link' href="#featured">Merch</a>
            </nav>

            <div className = "nav__cart">
            </div>
        </header>
    );

};

export default NavBar;
