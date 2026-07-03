import "./Event.scss";
import Button from "../Button/Button.tsx"


const Event = ({
    date,
    venue,
    location
}) => {
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
                <Button text="Tickets" />
            </div>
        </section>
    );

};

export default Event;
