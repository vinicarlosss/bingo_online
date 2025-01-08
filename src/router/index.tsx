import { createBrowserRouter } from "react-router-dom";
import * as uiScreens from "../ui/screens"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <uiScreens.Home/>
    },
    {
        path: "/conferir",
        element: <uiScreens.BingoCheck/>
    }
]);