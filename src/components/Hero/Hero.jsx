import { NavLink } from "react-router-dom";
import StareLogoTransparent from "../../assets/logo/stareLogoTransparent.png";
import "./Hero.scss";


const Hero = () => {
    return (
        <header className = "hero">
            <div className = "hero__buffer"></div>
            <div className = "hero__logo">
                <img src={StareLogoTransparent} alt="Stare Logo" />
            </div> 
        </header>
    );

};

export default Hero;
