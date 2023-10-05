import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/Login";
import App from "../App";
import NotFoundPage from "../pages/NotFoundPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: 
        <App />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/contact-us",
        element: <ContactUs />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/about",
        element: <AboutUs />
    },
    {
        path: "*",
        element: <NotFoundPage />
    },
]);

export default routes;