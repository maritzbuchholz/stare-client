import redEyesFade from "../../assets/icons/redEyesFade.mp4";
import "./Background.scss";

const Background = () => {
    return (
        <>
            <video className="background" autoPlay muted playsInline>
                <source src={redEyesFade} type="video/mp4" />
            </video>
        </>
    );

};

export default Background;