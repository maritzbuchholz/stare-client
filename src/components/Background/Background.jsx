import redEyesFade from "../../assets/icons/redEyesFade.mp4";
import "./Background.scss";

const Background = () => {
    return (
        <div className="background">
            <video 
                className="background__video"
                autoPlay
                muted
                playsInline
            >
                <source src={redEyesFade} type="video/mp4" />
            </video>
        </div>
    );
};

export default Background;