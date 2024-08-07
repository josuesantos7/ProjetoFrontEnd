import "./Menu.css"
import { Link } from "react-router-dom"

function Menu() {
    return (
        <div className="menu">

            <div className="menu-opcoes">
                <Link className="hiperlink" to="/dashboard"><span>Dashboard</span></Link>

                <Link className="hiperlink" to="/login"><span>Usuários</span></Link>

                <Link className="hiperlink" to="/cadastrar"><span>Locais</span></Link>
            </div>

            <div className="exit">
                <Link className="hiperlink" to="/">Sair</Link>
            </div>


        </div>
    )
}

export default Menu