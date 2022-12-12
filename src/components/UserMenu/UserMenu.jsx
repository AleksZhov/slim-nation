import s from './UserMenu.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
const UserMenu = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { exitBtnText } = useSelector(state => state.user.lang);
    const userName = useSelector(state => state.user.userData?.name);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <div className={s.container}>
            <div className={s.userMenuWrapper}>
                <p className={s.loginName}>{userName}</p>
                <button
                    className={s.exitBtn}
                    type="button"
                    onClick={toggleModal}
                >
                    {exitBtnText}
                </button>
            </div>
        </div>
    );
};

export default UserMenu;
