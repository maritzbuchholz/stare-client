import "./Error.scss";

const Error = () => {
    return (
        <div className="error">
            <h1 className="error__title">404 - Page not found</h1>
            <p className="error__description">Sorry, we couldn't find the page you're looking for. It may have been moved or deleted, or the link might be wrong.</p>
        </div>
    );
};

export default Error;