import { Icon } from 'components';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

const NavBar = ({ isLoggedIn, width }) => {
    const [isModalShown, setIsModalShown] = useState(false);
    const { diaryText, calcText, loginText, registText } = useSelector(
        state => state.user.lang
    );
    const toggleModal = () => {
        setIsModalShown(!isModalShown);
    };

    return (
        <nav>
            {isLoggedIn ? (
                width < 1280 ? (
                    <Icon
                        className={s.menuBtn}
                        iconName={isModalShown ? 'close' : 'menuBtn'}
                        onClick={toggleModal}
                        width="12"
                        height="18"
                    />
                ) : (
                    <>
                        <NavLink to="/diary">{diaryText}</NavLink>
                        <NavLink to="/calculator">{calcText}</NavLink>
                    </>
                )
            ) : (
                <>
                    <NavLink to="/login">{loginText}</NavLink>
                    <NavLink to="/registration">{registText}</NavLink>
                </>
            )}
        </nav>
    );
};
export default NavBar;
