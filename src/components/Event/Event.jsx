import "./Event.scss";


const Event = () => {
    return (
        <section className = "event">
            <div className="event__top">
                <p className="event__date">June 6, 2026</p>
            </div>
            <div className="event__bottom">
                <p className="event__venue">Brooklyn Monarch</p>
                <p className="event__location">Brooklyn, NY</p>
                <button className="event__tickets">Tickets</button>
            </div>
        </section>
    );

};

export default Event;
