import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./Routes/Home";
import LoginRegisterLayout from "./Routes/Layouts/LoginRegister/LoginRegisterLayout";
import Login from "./Routes/Login/Login";
import Register from "./Routes/Register/Register";
import Dashboard from "./Routes/Dashboard/Dashboard";
import Playground from "./Routes/Playground/Playground";
import Results from "./Routes/Results/Results";
import DashboardLayout from "./Routes/Layouts/DashboardLayout/DashboardLayout";
import Events from "./Routes/Events/Events";
import Leaderboard from "./Routes/Leaderboard/Leaderboard";
import Support from "./Routes/Support/Support";
import About from "./Routes/About/About";

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
            }
        ]
    }
])

export default Router;