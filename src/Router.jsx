import { createBrowserRouter, Navigate } from 'react-router-dom';
import About from './routes/about/About';
import Admin from './routes/admin/Admin';
import AdminDashboard from './routes/admin/dashboard/Dashboard';
import AdvanceAnalytics from './routes/advanceAnalytics/AdvanceAnalytics';
import Dashboard from './routes/dashboard/Dashboard';
import Error from './routes/error/Error';
import NotFound from './routes/error/NotFound';
import Events from './routes/events/Events';
import ForgotPassword from './routes/forgotPassword/ForgotPassword';
import SetPassword from './routes/forgotPassword/SetPassword';
import Home from './routes/home/Home';
import InProgress from './routes/inProgress/InProgress';
import AdminDashboardLayout from './routes/layouts/adminDashboardLayout/AdminDashboardLayout';
import DashboardLayout from './routes/layouts/dashboardLayout/DashboardLayout';
import LoginRegisterLayout from './routes/layouts/loginRegister/LoginRegisterLayout';
import Leaderboard from './routes/leaderboard/Leaderboard';
import Login from './routes/login/Login';
import Play from './routes/play/Play';
import Playground from './routes/playground/Playground';
import Pricing from './routes/pricing/Pricing';
import Profile from './routes/profile/Profile';
import Register from './routes/register/Register';
import Results from './routes/results/Results';
import Support from './routes/support/Support';
import PublicProfile from './routes/profile/PublicProfile';
import Try from './routes/try/Try';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <LoginRegisterLayout />,
        errorElement: <NotFound />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
            { path: '/admin', element: <Admin /> },
            { path: '/error', element: <Error /> },
            { path: '/forgot-password', element: <ForgotPassword /> },
            { path: '/reset-password/:id/:token', element: <SetPassword /> },
            { path: '/reset-password', element: <SetPassword /> },
            { path: '/pricing', element: <Pricing /> },
            { path: '/profile/:id', element: <PublicProfile /> },
        ],
    },
    {
        path: '/',
        element: <DashboardLayout />,
        errorElement: <NotFound />,
        children: [
            { path: '/', element: <Navigate to={'/'} /> },
            { path: '/dashboard/pricing', element: <Pricing /> },
            { path: '/dashboard', element: <Dashboard /> },
            { path: '/playground', element: <Playground /> },
            { path: '/events', element: <Events /> },
            { path: '/leaderboard', element: <Leaderboard /> },
            { path: '/results', element: <Results /> },
            { path: '/support', element: <Support /> },
            { path: '/about', element: <About /> },
            { path: '/profile', element: <Profile /> },
            {
                path: '/settings',
                element: <InProgress value="Back to Dashboard" href="/dashboard" />,
            },
        ],
    },
    {
        path: '/',
        element: <AdminDashboardLayout />,
        children: [
            { path: '/admin', element: <Navigate to={'/admin'} /> },
            { path: '/admin/dashboard', element: <AdminDashboard /> },
        ],
    },
    {
        path: '/play/:id',
        element: <Play />,
        errorElement: <NotFound />,
    },
    {
        path: '/try',
        element: <Try />,
        errorElement: <NotFound />,
    },
    {
        path: '/advance-analytics',
        element: <AdvanceAnalytics />,
        errorElement: <NotFound />,
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
        element: <NotFound label="404: Page not Found" />,
    },
]);

export default Router;
