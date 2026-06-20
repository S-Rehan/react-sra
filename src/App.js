import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactUs from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter , RouterProvider , Outlet } from 'react-router';

// JSX (transpiled before it reaches the JS engine) - PARCEL - Babel

// JSX => Babel transpiles it to => React.createElement() => React.createElement-JS Object => HTMLElement(render)

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <ContactUs />, 
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
        ],
        errorElement: <Error />    
    },
     
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
