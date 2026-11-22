import NYHC from "../../assets/icons/nyhc.png";
import Insta from "../../assets/icons/instagram.svg";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className = "footer__logo">
                <img className = "footer__nyhc" src={NYHC} alt="New York Hardcore icon" />
            </div>
            <div className = "footer__right">
                <p className = "footer__copyright">© 2026 Stare. All rights reserved.</p>
                <Link className = "footer__insta-link" to="/error">
                    <img className = "footer__insta" src={Insta} alt="Instragram icon" />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
