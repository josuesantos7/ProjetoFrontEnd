import "./Dashboard.css"
import Menu from "../../componentes/Menu"

function Dashboard() {
    return (
        <div className="container-dashboard">
            <div className="container-menu">
            <Menu/>
            </div>

            <div>
                <h1>Dashboard</h1>
            </div>
            
        </div>
    )
}

export default Dashboard