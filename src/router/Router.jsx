import { Navigate, createBrowserRouter } from "react-router-dom"
import InitialPage from "../pages/initialpage/Initialpage"
import GameScreen from "../pages/gamescreen/Gamescreen"

const router = createBrowserRouter([
    {
        path:"/",
        element:<Navigate to="/initialPage"/>
    },
    {
        path: "/initialPage",
        element: <InitialPage/>
    },
    {
        path: "/initialPage/GameScreen",
        element: <GameScreen />
    }
])

export default router
