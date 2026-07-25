import "./Button.scss";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
    text: string;
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
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
            <button type={type} className={`button ${className}`} onClick={onClick}>
                {text}
            </button>
        </>
    );
};

export default Button;