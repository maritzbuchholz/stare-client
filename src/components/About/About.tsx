import "./About.scss";
import Insta from "../../assets/icons/instagram.svg";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="about" id="about">
            <h1 className="about__title">About</h1>
            <p className="about__description">Two brothers. Low-fi. Raw.</p>
            <p className="about__description">A project born in the depths of COVID,
                <b className="about__name"> Stare</b> aims to strike unease in the heart of its listeners.</p>
            <p className="about__description">Unforgiving and merciless.</p>
            <Link className = "about__insta-link" to="/error">
                <img className = "about__insta" src={Insta} alt="Instragram icon" />
            </Link>
        </div>
    );
};

export default About;