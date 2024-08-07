import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import LoginRegisterLayout from "./routes/layouts/loginRegister/LoginRegisterLayout";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import Dashboard from "./routes/dashboard/Dashboard";
import Playground from "./routes/playground/Playground";
import Results from "./routes/results/Results";
import DashboardLayout from "./routes/layouts/dashboardLayout/DashboardLayout";
import Events from "./routes/events/Events";
import Leaderboard from "./routes/leaderboard/Leaderboard";
import Support from "./routes/support/Support";
import About from "./routes/about/About";
import Play from "./routes/play/Play";
import Profile from "./routes/profile/Profile";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/',
        element:<LoginRegisterLayout/>,
        children:[
            {
                path:'/',
                element:<Navigate to={'/'}/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/Register',
                element:<Register/>
            }
        ]
    },
    {
        path:'/',
        element:<DashboardLayout/>,
        children:[
            {
                path:'/',
                element:<Navigate to={'/'}/>
            },
            {
                path:'/dashboard',
                element:<Dashboard />
            },
            {
                path:'/playground',
                element:<Playground/>
            },
            {
                path:'/events',
                element:<Events/>
            },
            {
                path:'/leaderboard',
                element:<Leaderboard/>
            },
            {
                path:'/results',
                element:<Results/>
            },
            {
                path:'/support',
                element:<Support/>
            },
            {
                path:'/about',
                element:<About/>
            },
            
        ]
    },
    {
        path:'/play',
        element:<Play/>
    },
    {
        path:'/profile',
        element:<Profile/>
    }
])

export default Router;