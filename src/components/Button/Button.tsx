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
            <button className={`button ${classname}`}>{text}: Props</button>
        </>
    );
};

export default Button;