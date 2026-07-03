import "./About.scss";
import Insta from "../../assets/icons/instagram.svg";

const About = () => {
    return (
        <div className="about">
            <h1 className="about__title">About</h1>
            <p className="about__description">Two brothers. Low-fi. Raw.</p>
            <p className="about__description">A project that started in the depths of COVID,
                <b className="about__name"> Stare</b> aims to strike unease in the heart of it's listeners.</p>
            <p className="about__description">Unforgiving and merciless.</p>
            <a className = "about__insta-link" href="#">
                <img className = "about__insta" src={Insta} alt="Instragram icon" />
            </a>
        </div>
    );
};

export default About;