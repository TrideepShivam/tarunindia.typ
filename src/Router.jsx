import { Navigate, createBrowserRouter } from 'react-router-dom';
import Home from './routes/home/Home';
import LoginRegisterLayout from './routes/layouts/loginRegister/LoginRegisterLayout';
import Login from './routes/login/Login';
import Dashboard from './routes/dashboard/Dashboard';
import Playground from './routes/playground/Playground';
import Results from './routes/results/Results';
import DashboardLayout from './routes/layouts/dashboardLayout/DashboardLayout';
import AdminDashboardLayout from './routes/layouts/adminDashboardLayout/AdminDashboardLayout';
import Events from './routes/events/Events';
import Leaderboard from './routes/leaderboard/Leaderboard';
import Support from './routes/support/Support';
import About from './routes/about/About';
import Play from './routes/play/Play';
import Profile from './routes/profile/Profile';
import Admin from './routes/admin/Admin';
import AdminDashboard from './routes/admin/dashboard/Dashboard';
import Error from './routes/error/Error';
import NotFound from './routes/error/NotFound';
import Register from './routes/register/Register';
import ForgotPassword from './routes/forgotPassword/ForgotPassword';
import SetPassword from './routes/forgotPassword/SetPassword';
import Pricing from './routes/pricing/Pricing';
import AdvanceAnalytics from './routes/advanceAnalytics/AdvanceAnalytics';
import InProgress from './routes/inProgress/InProgress';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <LoginRegisterLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                // element:<RegisterTrial/>
                element: <Register />,
            },
            {
                path: '/admin',
                element: <Admin />,
            },
            {
                path: '/error',
                element: <Error />,
            },
            {
                path: '/forgot-password',
                element: <ForgotPassword />,
            },
            {
                path: '/reset-password/:id/:token',
                element: <SetPassword />,
            },
            {
                path: '/reset-password',
                element: <SetPassword />,
            },
            {
                path: '/pricing',
                element: <Pricing />,
            },
        ],
    },
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to={'/'} />,
            },
            {
                path: '/dashboard/pricing',
                element: <Pricing />,
            },
            {
                path: '/dashboard',
                element: <Dashboard />,
            },
            {
                path: '/playground',
                element: <Playground />,
            },
            {
                path: '/events',
                element: <Events />,
            },
            {
                path: '/leaderboard',
                element: <Leaderboard />,
            },
            {
                path: '/results',
                element: <Results />,
            },
            {
                path: '/support',
                element: <Support />,
            },
            {
                path: '/about',
                element: <About />,
            },
        ],
    },
    {
        path: '/',
        element: <AdminDashboardLayout />,
        children: [
            {
                path: '/admin',
                element: <Navigate to={'/admin'} />,
            },
            {
                path: '/admin/dashboard',
                element: <AdminDashboard />,
            },
        ],
    },
    {
        path: '/play/:id',
        element: <Play />,
    },
    {
        path: '/advance-analytics',
        element: <AdvanceAnalytics />,
    },
    {
        path: '/about-us',
        element: <InProgress />,
    },
    {
        path: '/contact-us',
        element: <InProgress />,
    },
    {
        path: '/contents',
        element: <InProgress />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

export default Router;
