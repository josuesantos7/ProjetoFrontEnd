import { createBrowserRouter} from 'react-router-dom'
import Login from "../pages/Login/Login"
import FormLogin from "../pages/Login/FormLogin"


export const routes = createBrowserRouter([
    {
        path:'/',
        element: <FormLogin/>,
    },
    {
        path:'/cadastrar',
        element: <Login/>,
    },
])