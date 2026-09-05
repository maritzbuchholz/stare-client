import { useState, useRef, useEffect, Dispatch, SetStateAction, useContext } from "react";
import { Link } from "react-router-dom";
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
    
    //Creates an unassigned ref object; this will be assigned later once the header element generates
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        //Pull the DOM element out of the ref
        const navEl = navRef.current;
        if (!navEl) return;

        //setProperty(propertyName, value)
        //document.documentElement.style = this turn --nav-heigth into
        //a CSS variable that sits at the html level and has no effect inherently
        //but eventually will be used by components on the page
        const updateNavHeight = () => {
            document.documentElement.style.setProperty("--nav-height", `${navEl.getBoundingClientRect().height}px`);
        };

        updateNavHeight();

        //ResizeObserver watches for changes in navEl and fires updateNavHeight
        const resizeObserver = new ResizeObserver(updateNavHeight);
        resizeObserver.observe(navEl);

        //Return cleanup function that stops the observer from 
        //watching once you leave the page or when the UseEffect re-runs
        return () => resizeObserver.disconnect();
    }, []);

    return (
        //Once this element generates, a reference of it is stored in navRef
        <header className = "nav" ref={navRef}>
            <div className = "nav__top">
                <div className = "nav__logo">
                    <img src={StareLogoTrasparent} alt="Stare Logo" />
                </div>
                
                <button className="nav__burger" onClick={() => setMenuOpen(!menuOpen)}>
                    <img src={menuOpen ? Close : Burger} alt="Menu Item" className="nav__menu-image" />
                </button>

                <nav className={"nav__tabs-tablet"}>
                    <Link className='nav__link' to="/#hero">Home</Link>
                    <Link className='nav__link' to="/#about">About</Link>
                    <Link className='nav__link' to="/#tour">Tour</Link>
                    <Link className='nav__link' to="/#merch">Merch</Link>
                </nav>

                <div className = "nav__cart">
                    <button onClick={() => setCartOpen(!cartOpen)} className = "nav__cart-button">
                        <img src={cart.length === 0 ? Cart : (cartOpen ? Close : fullCart)} alt="Shopping Cart" className="nav__cart-image" />
                    </button>
                </div>
            </div>

            <nav className={`nav__tabs-mobile ${menuOpen ? "nav__tabs-mobile--open" : ""}`}>
                <Link className='nav__link' to="/#hero">Home</Link>
                <Link className='nav__link' to="/#about">About</Link>
                <Link className='nav__link' to="/#tour">Tour</Link>
                <Link className='nav__link' to="/#merch">Merch</Link>
            </nav>
        </header>
    );

};

export default NavBar;
