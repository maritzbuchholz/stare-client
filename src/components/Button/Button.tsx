import "./Button.scss";

type ButtonProps = {
    text: string;
    type: string;
    className?: string;
    onClick?: () => void;
}

const Button = ({
    text,
    type,
    className,
    onClick}: ButtonProps) => {
    return (
        <>
            <button className={`button ${className}`} onClick={onClick}>
                {text}
            </button>
        </>
    );
};

export default Button;