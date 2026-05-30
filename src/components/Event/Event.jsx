import "./Event.scss";


const Event = () => {
    return (
        <section className = "event">
            <div className="event__top">
                <p className="event__date"></p>
            </div>
            <div className="event__bottom">
                <p className="event__venue"></p>
                <p className="event__location"></p>
                <button className="event__tickets">Tickets</button>
            </div>
        </section>
    );

};

export default Event;
