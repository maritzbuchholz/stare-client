import "./Music.scss";
import Insta from "../../assets/icons/instagram.svg";
import { Link } from "react-router-dom";

const Music = () => {
    return (
        <div className="music" id="music">
            <h1 className="music__title">Music</h1>
            <p className="music__description">Help yourself to free bootlegs from our Bandcamp</p>
            <iframe
                className="music__player"
                title="Bootleg 1 by Stare"
                src="https://bandcamp.com/EmbeddedPlayer/track=2839163793/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/"
            >
                <a href="https://stareny.bandcamp.com/track/bootleg-1">Bootleg 1 by Stare</a>
            </iframe>
        </div>
    );
};

export default Music;