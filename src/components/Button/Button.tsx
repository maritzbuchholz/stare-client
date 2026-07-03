import "./Button.scss";

type ButtonProps = {
    text: string;
    classname?: string;
    onClick?: () => void;
}

const Button = ({
    text,
    classname,
    onClick}: ButtonProps) => {
    return (
        <>
            <button className={`button ${classname}`} onClick={onClick}>
                {text}
            </button>
        </>
    );
};

export default Button;