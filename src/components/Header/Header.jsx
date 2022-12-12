import s from './Header.module.css';
import { useSelector } from 'react-redux';
import { UserMenu, Logo, NavBar } from 'components';
import { useWidth } from 'hooks/useWidth';
const Header = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    const width = useWidth();
    return (
        <header>
            <div className={s.container}>
                <Logo width={width} isLoggedIn={isLoggedIn} />
                <NavBar isLoggedIn={isLoggedIn} width={width} />
            </div>
            <div className={s.line}></div>
            {isLoggedIn && <UserMenu />}
        </header>
    );
};
export default Header;
