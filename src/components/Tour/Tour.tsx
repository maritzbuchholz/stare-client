import "./Tour.scss";
import Event from "../Event/Event"


const Tour = () => {
    const tourDates = [
        {
            key: 1,
            date: "Dec 6, 2027",
            venue: "The Woodshop",
            location: "Brooklyn, NY",
            url: "/error"
        },
        {
            key: 2,
            date: "Dec 10, 2027",
            venue: "TV Eye",
            location: "Ridgewood, NY",
            url: "/error"
        },
        {
            key: 3,
            date: "Dec 12, 2027",
            venue: "Gold Sounds",
            location: "Brooklyn, NY",
            url: "/error"
        },
    ]
    return (
        <div className="tour" id="tour">
            <h1 className="tour__title">Tour</h1>
            {tourDates.map((event) => (
                <Event
                    key={event.key}
                    date={event.date}
                    venue={event.venue}
                    location={event.location}
                    url={event.url}
                />
            ))}
      </div>
    );

};

export default Tour;
