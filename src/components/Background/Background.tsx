import { useState } from "react";
import redEyesFirstFrame from "../../assets/icons/redEyesFirstFrame.png";
import redEyesStatic from "../../assets/icons/redEyesStatic.png";
import "./Background.scss";

const FRAME_COUNT = 2;

const Background = () => {
    // Hold on the first frame until both images have loaded, so the fade
    // never reveals a half-downloaded image on a slow connection.
    const [loadedFrames, setLoadedFrames] = useState(0);
    const handleFrameLoad = () => setLoadedFrames((count) => count + 1);
    const isReady = loadedFrames >= FRAME_COUNT;

    return (
        <div className={`background${isReady ? " background--ready" : ""}`}>
            <div className="background__screen">
            </div>
            <div className="background__frames">
                <img
                    className="background__frame"
                    src={redEyesStatic}
                    alt=""
                    onLoad={handleFrameLoad}
                />
                <img
                    className="background__frame background__frame--first"
                    src={redEyesFirstFrame}
                    alt=""
                    onLoad={handleFrameLoad}
                />
            </div>
        </div>
    );
};

export default Background;
