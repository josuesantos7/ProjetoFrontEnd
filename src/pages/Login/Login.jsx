import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import "./Login.css"
import bannerImg from '../../assets/login-banner.png'
import arvoreIcon from '../../assets/arvore.png'
import { useState } from "react"

function Login() {
    const { register, handleSubmit, formState } = useForm()

    const navigate = useNavigate()

    // eslint-disable-next-line no-unused-vars
    const [erro, setErro] = useState("")

    async function logarUsuario(data) {
        setErro("")

        const response = await fetch(`http://localhost:3000/usuarios?email=${data.email}`)
        const usuarios = await response.json()

        if (usuarios.length > 0) {
        const usuario = usuarios[0]
        
            if (String(usuario.password) === String(data.password)) {
                alert("Login realizado com sucesso")
                navigate("/dashboard")
            } else {
                alert("Email ou senha inválidos")
                setErro("Email ou senha inválidos")
            }
        } else {
            alert("Email ou senha inválidos")
            setErro("Email ou senha inválidos")
        }
}

    return (
        <div className="container-login">
            <div className="container-card-login">
                <h1 className="marca-empresa">Nature Quest</h1>
                <div className="card-login">
                    <form className="form-login" onSubmit={handleSubmit(logarUsuario)}>
                        <h1>Login <img src={arvoreIcon} alt="Icone Arvore" width={"38px"} height={"30px"}/></h1>
                        <input
                            type="email" placeholder="Email" {...register('email', { required: "O email é obrigatório" })}
                        ></input>
                        {formState.errors?.email?.message}

                        <input type="password" placeholder="Senha" {...register('password', { required: "A senha é obrigatória" })}></input>
                        {formState.errors?.password?.message}

                        <button className="botao-logar" type="submit">Logar</button>

                        <span>Ainda não tem cadastro? <Link to='/cadastrar'>Cadastre-se</Link></span>
                    </form>
                </div>
            </div>


            <div className="banner-Image">
                <img src={bannerImg} alt="Banner Login" />
            </div>

        </div>
    )
}

export default Login