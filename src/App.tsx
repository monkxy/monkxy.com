import { createBrowserRouter, RouterProvider } from "react-router-dom";

import * as views from "./views";

const router = createBrowserRouter([
    {
        id: "app",
        children: [
            {
                id: "home",
                path: "/",
                element: <views.Home />
            }
        ]
    }
]);

export default function App() {
    return <RouterProvider router={router} />;
}
