import "./Button.scss";

const Button = ({
    text,
    classname}) => {
    return (
        <>
            <button className={`button ${classname}`}>{text}</button>
        </>
    );
};

export default Button;