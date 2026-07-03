import NYHC from "../../assets/icons/nyhc.png";
import Insta from "../../assets/icons/instagram.svg";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className = "footer__logo">
                <img className = "footer__nyhc" src={NYHC} alt="New York Hardcore icon" />
            </div>
            <div className = "footer__right">
                <p className = "footer__copyright">© 2026 Stare. All rights reserved.</p>
                <a className = "footer__insta-link" href="#">
                    <img className = "footer__insta" src={Insta} alt="Instragram icon" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
