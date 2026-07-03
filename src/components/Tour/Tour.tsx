import "./Tour.scss";
import Event from "../Event/Event.tsx"


const Tour = () => {
    const tourDates = [
        {
            key: 1,
            date: "December 6, 2026",
            venue: "Brooklyn Monarch",
            location: "Brooklyn, NY"
        },
        {
            key: 2,
            date: "December 10, 2026",
            venue: "TV Eye",
            location: "Ridgewood, NY"
        },
        {
            key: 3,
            date: "December 12, 2026",
            venue: "Gold Sounds",
            location: "Brooklyn, NY"
        },
    ]
    return (
        <div className="tour">
            <h1 className="tour__title">Tour</h1>
            {tourDates.map((event) => (
                <Event
                    key={event.key}
                    date={event.date}
                    venue={event.venue}
                    location={event.location}
                />
            ))}
      </div>
    );

};

export default Tour;
