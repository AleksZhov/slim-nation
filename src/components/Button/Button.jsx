import s from './Button.module.css';
const Button = ({ clName, type = 'button', onClick, children }) => {
    const className = s[clName] || s.button;
    return (
        <button className={className} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
