import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./Routes/Home";
import LoginRegisterLayout from "./Routes/Layouts/LoginRegister/LoginRegisterLayout";
import Login from "./Routes/Login/Login";
import Register from "./Routes/Register/Register";
import Dashboard from "./Routes/Dashboard/Dashboard";
import Playground from "./Routes/Playground/Playground";
import Results from "./Routes/Results/Results";
import DashboardLayout from "./Routes/Layouts/DashboardLayout/DashboardLayout";

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
                element:<Login/>
            },
            {
                path:'/leaderboard',
                element:<Login/>
            },
            {
                path:'/results',
                element:<Results/>
            },
            {
                path:'/support',
                element:<Register/>
            },
            {
                path:'/about',
                element:<Register/>
            }
        ]
    }
])

export default Router;