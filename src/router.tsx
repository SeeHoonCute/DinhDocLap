import { RouteObject } from "react-router-dom";
import { LogIn } from "./pages/LogIn/LogIn";
import { Frame } from "./frame";
import {SignIn} from "./pages/SignIn/SignIn";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import { Home } from "./pages/Home/Home";
import { Sightseeing } from "./pages/Sightseeing/Sightseeing";
// import { CarouselCard } from "./components/CarouselCard/CarouselCard";
// import { AuthenticationTitle } from "./components/AuthenticationTitle/AuthenticationTitle";

export const routes:RouteObject[] = [
    {
        path:"",
        element: <Frame/>,
        children:[
            {
                path:'',
                element:<Home/>
            },
            {
                path:'/sightseeing',
                element:<Sightseeing/>
            },
            {
                path:'/map3D',
                element:<Home/>
            },
            {
                path:'/contactUs',
                element:<ContactUs/>
            },
        ]
    },
    {
        path:"login",
        element: <LogIn/>,
    },
    {
        path:"signIn",
        element: <SignIn/>,
    },
];