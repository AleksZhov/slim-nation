import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
const PrivateRoute = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);

    return !isLoggedIn ? <Outlet /> : <Navigate to="diary" />;
};

export default PrivateRoute;
