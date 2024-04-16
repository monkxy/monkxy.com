import { createBrowserRouter, RouterProvider } from "react-router-dom";

import * as views from "../views";

export const App = () => (
    <RouterProvider
        router={createBrowserRouter([
            {
                id: "app",
                children: [
                    {
                        id: "home",
                        path: "/",
                        element: <views.Home />,
                    },
                ],
            },
        ])}
    />
);
