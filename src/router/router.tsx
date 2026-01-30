import {createHashRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Cases from "../pages/Cases";
import Services from "../pages/Services";
import Careers from "../pages/Careers";
import Products from "../pages/Products";

export const router = createHashRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "cases", element: <Cases /> },
            { path: "services", element: <Services /> },
            { path: "careers", element: <Careers /> },
            { path: "products", element: <Products /> },
        ],
    },
    { path: "*", element: <NotFound /> },
])