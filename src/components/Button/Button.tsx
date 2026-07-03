import "./Button.scss";

type ButtonProps = {
    text: string;
    classname?: string;
}

const Button = ({
    text,
    classname}: ButtonProps) => {
    return (
        <>
            <button className={`button ${classname}`}>{text}</button>
        </>
    );
};

export default Button;