import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Icon, Button } from '../../components/';
import s from './PageNotFound.module.css';
const PageNotFound = () => {
    const navigate = useNavigate();
    const { pageNotFound, pageNotFoundBtnText } = useSelector(
        state => state.user.lang
    );
    return (
        <div className={s.pageNtFndCont}>
            <p className={s.message}>{pageNotFound}</p>

            <ul className={s.svgList}>
                <li>
                    <Icon
                        className={s.face}
                        iconName="icon-shocked"
                        width="64px"
                        height="64px"
                    />
                </li>
                <li>
                    <Icon
                        className={s.fire}
                        iconName="icon-fire"
                        width="64px"
                        height="64px"
                    />
                </li>
                <li>
                    <Icon
                        className={s.face}
                        iconName="icon-shocked"
                        width="64px"
                        height="64px"
                    />
                </li>
            </ul>
            <p className={s.number}>404</p>
            <Button onClick={() => navigate('/', { replace: true })}>
                {pageNotFoundBtnText}
            </Button>
        </div>
    );
};
export default PageNotFound;
