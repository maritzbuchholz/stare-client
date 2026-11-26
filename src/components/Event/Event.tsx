import "./Event.scss";
import Button from "../Button/Button"
import { useNavigate } from "react-router-dom";

type EventProps = {
    date: string;
    venue: string;
    location: string;
    url: string;
}

const Event = ({
    date,
    venue,
    location,
    url
}: EventProps) => {
    const navigate = useNavigate();

    const onTickets = () => {
        navigate(url);
    };

    return (
        <section className = "event">
            <div className="event__top">
                <p className="event__date">{date}</p>
            </div>
            <div className="event__bottom">
                <div className="event__text">
                    <p className="event__venue">{venue}</p>
                    <p className="event__location">{location}</p>
                </div>
                <Button text="Tickets" className="event__button" onClick={onTickets} />
            </div>
        </section>
    );

};

export default Event;
