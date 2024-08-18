import "./Dashboard.css"
import Menu from "../../componentes/Menu"

function Dashboard() {
    return (
        <div className="container-dashboard">
            <div className="container-menu">
                <Menu />
            </div>

            <div className="main-dashboard">
                <div>
                    <h1>Dashboard</h1>
                </div>

                <div className="block-user-locais">
                    <div className="card-user-locais">

                        <div>
                            Usuários
                        </div>

                        <div className="conteudo-usuarios">
                            <div>
                                0
                            </div>

                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                                </svg>
                            </div>
                        </div>


                    </div>

                    <div className="card-user-locais">
                        <div>
                            Locais
                        </div>

                        <div className="conteudo-locais">
                            <div>
                                0
                            </div>

                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-pin-map-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z" />
                                    <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="area-locais">
                    <h2>Locais</h2>
                    <span>Lista das localidades cadastradas</span>

                    <table>
                            <thead>
                                <tr>
                                    <th>Local</th>
                                    <th>Latitude</th>
                                    <th>Longitude</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {/* {locais.map((local, index) => (
                                    <tr key={index}>
                                        <th>{local.nome}</th>
                                        <th>{local.latitude}</th>
                                        <th>{local.longitude}</th>
                                    </tr>
                                ))} */}
                            </tbody>
                        </table>
                </div>
            </div>

        </div>
    )
}

export default Dashboard