import logo from 'images/logo.png';
import { Link } from 'react-router-dom';
import s from './Logo.module.css';

const Logo = ({ width, isLoggedIn }) => {
    return (
        <Link to="/" className={s.link}>
            <img className={s.logoImg} alt="logo" src={logo} />
            {(isLoggedIn || width > 767) && (
                <p className={s.logoText}>
                    Slim<span className={s.subText}>Nation</span>
                </p>
            )}
        </Link>
    );
};

export default Logo;
