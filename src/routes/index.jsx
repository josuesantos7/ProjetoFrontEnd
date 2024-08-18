import { createBrowserRouter} from 'react-router-dom'
import Cadastro from "../pages/Cadastro/Cadastro"
import Login from "../pages/Login/Login"
import Dashboard from "../pages/Dashboad/Dashboard"
import CadastrarLocais from '../pages/Locais/CadastrarLocais'
import Locais from '../pages/Locais/Locais'


export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Login/>,
    },
    {
        path:'/cadastrar',
        element: <Cadastro/>,
    },
    {
        path:'/dashboard',
        element: <Dashboard/>,
    },
    {
        path:'/cadastrarlocais',
        element: <CadastrarLocais/>,
    },
    {
        path:'/locais',
        element: <Locais/>,
    },
])