import { createBrowserRouter, Navigate } from 'react-router-dom';
import { lazy, Suspense, useState, useEffect } from 'react';
import Loading from './components/loading/Loading';

const About = lazy(() => import('./routes/about/About'));
const Admin = lazy(() => import('./routes/admin/Admin'));
const AdminDashboard = lazy(() => import('./routes/admin/dashboard/Dashboard'));
const AdvanceAnalytics = lazy(() => import('./routes/advanceAnalytics/AdvanceAnalytics'));
const Dashboard = lazy(() => import('./routes/dashboard/Dashboard'));
const Error = lazy(() => import('./routes/error/Error'));
const NotFound = lazy(() => import('./routes/error/NotFound'));
const Events = lazy(() => import('./routes/events/Events'));
const ForgotPassword = lazy(() => import('./routes/forgotPassword/ForgotPassword'));
const SetPassword = lazy(() => import('./routes/forgotPassword/SetPassword'));
const Home = lazy(() => import('./routes/home/Home'));
const InProgress = lazy(() => import('./routes/inProgress/InProgress'));
const AdminDashboardLayout = lazy(() => import('./routes/layouts/adminDashboardLayout/AdminDashboardLayout'));
const DashboardLayout = lazy(() => import('./routes/layouts/dashboardLayout/DashboardLayout'));
const LoginRegisterLayout = lazy(() => import('./routes/layouts/loginRegister/LoginRegisterLayout'));
const Leaderboard = lazy(() => import('./routes/leaderboard/Leaderboard'));
const Login = lazy(() => import('./routes/login/Login'));
const Play = lazy(() => import('./routes/play/Play'));
const Playground = lazy(() => import('./routes/playground/Playground'));
const Pricing = lazy(() => import('./routes/pricing/Pricing'));
const Profile = lazy(() => import('./routes/profile/Profile'));
const Register = lazy(() => import('./routes/register/Register'));
const Results = lazy(() => import('./routes/results/Results'));
const Support = lazy(() => import('./routes/support/Support'));
const PublicProfile = lazy(() => import('./routes/profile/PublicProfile'));
const Try = lazy(() => import('./routes/try/Try'));

// Custom Suspense wrapper with timeout
const suspense = (Component) => {
    const SuspenseWrapper = () => {
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 1000); // 1 second timeout

            return () => clearTimeout(timer);
        }, []);

        return <Suspense fallback={<Loading />}>{isLoading ? <Loading /> : <Component />}</Suspense>;
    };

    return <SuspenseWrapper />;
};

const Router = createBrowserRouter([
    {
        path: '/',
        element: suspense(LoginRegisterLayout),
        errorElement: suspense(NotFound),
        children: [
            { path: '/', element: suspense(Home) },
            { path: '/login', element: suspense(Login) },
            { path: '/register', element: suspense(Register) },
            { path: '/admin', element: suspense(Admin) },
            { path: '/error', element: suspense(Error) },
            { path: '/forgot-password', element: suspense(ForgotPassword) },
            { path: '/reset-password/:id/:token', element: suspense(SetPassword) },
            { path: '/reset-password', element: suspense(SetPassword) },
            { path: '/pricing', element: suspense(Pricing) },
            { path: '/profile/:id', element: suspense(PublicProfile) },
        ],
    },
    {
        path: '/',
        element: suspense(DashboardLayout),
        errorElement: suspense(NotFound),
        children: [
            { path: '/', element: <Navigate to={'/'} /> },
            { path: '/dashboard/pricing', element: suspense(Pricing) },
            { path: '/dashboard', element: suspense(Dashboard) },
            { path: '/playground', element: suspense(Playground) },
            { path: '/events', element: suspense(Events) },
            { path: '/leaderboard', element: suspense(Leaderboard) },
            { path: '/results', element: suspense(Results) },
            { path: '/support', element: suspense(Support) },
            { path: '/about', element: suspense(About) },
            { path: '/profile', element: suspense(Profile) },
            {
                path: '/settings',
                element: suspense(() => <InProgress value="Back to Dashboard" href="/dashboard" />),
            },
        ],
    },
    {
        path: '/',
        element: suspense(AdminDashboardLayout),
        children: [
            { path: '/admin', element: <Navigate to={'/admin'} /> },
            { path: '/admin/dashboard', element: suspense(AdminDashboard) },
        ],
    },
    {
        path: '/play/:id',
        element: suspense(Play),
        errorElement: suspense(NotFound),
    },
    {
        path: '/demo',
        element: suspense(Try),
        errorElement: suspense(NotFound),
    },
    {
        path: '/advance-analytics',
        element: suspense(AdvanceAnalytics),
        errorElement: suspense(NotFound),
    },
    {
        path: '/about-us',
        element: suspense(InProgress),
    },
    {
        path: '/contact-us',
        element: suspense(InProgress),
    },
    {
        path: '/contents',
        element: suspense(InProgress),
    },
    {
        path: '*',
        element: suspense(() => <NotFound label="404: Page not Found" />),
    },
]);

export default Router;
