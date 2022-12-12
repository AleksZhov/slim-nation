import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import RestrictedRoute from './ProtectedRoutes/RestrictedRoute';
import PrivateRoute from './ProtectedRoutes/PrivateRoute';
import { useSelector } from 'react-redux';
import { Container, Header } from '../components';

const Home = lazy(() => import('../pages/Home/Home'));
const Login = lazy(() => import('../pages/Login/Login'));
const Diary = lazy(() => import('../pages/Diary/Diary'));
const Calculator = lazy(() => import('../pages/Calculator/Calculator'));
const Register = lazy(() => import('../pages/Register/Register'));
const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));

export const App = () => {
    const isLoading = useSelector(state => state.user.isLoading);
    if (isLoading) {
        Loading.pulse('Loading...', {
            svgSize: '280px',
            backgroundColor: '#00000055',
            svgColor: '#FC842D',
            messageFontSize: '35px',
        });
    }

    return (
        <Container>
            <Header />
            <main>
                <Suspense>
                    <Routes>
                        <Route element={<PrivateRoute />}>
                            <Route path="/" element={<Home />} />
                            <Route path="login" element={<Login />} />
                            <Route path="register" element={<Register />} />
                        </Route>
                        <Route element={<RestrictedRoute />}>
                            <Route path="diary" element={<Diary />} />
                            <Route path="calculator" element={<Calculator />} />
                        </Route>
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Suspense>
            </main>
        </Container>
    );
};
