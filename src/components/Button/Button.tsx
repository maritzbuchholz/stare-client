import "./Button.scss";

type ButtonProps = {
    text: string;
    className?: string;
    onClick?: () => void;
}

const Button = ({
    text,
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