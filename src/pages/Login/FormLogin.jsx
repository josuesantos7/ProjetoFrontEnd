import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import "./FormLogin.css"

function FormLogin() {

    const { register, handleSubmit, formState } = useForm()

    function logarUsuario(){
        console.log("Login realizado com sucesso")
        alert("Login realizado com sucesso")
    }

    return (
        <div className="container-login">
            <div className="card-login">
            <form className="form-login" onSubmit={handleSubmit(logarUsuario)}>
                <h1>Login 🌳</h1>
                <input
                 type="email" placeholder="Email" {...register ('email', { required: "O email é obrigatório"})}
                ></input>
                {formState.errors?.email?.message}

                <input type="password" placeholder="Senha" {...register ('password', { required: "A senha é obrigatória"})}></input>
                {formState.errors?.password?.message}

                <button type="submit">Logar</button>

                <span>Ainda não tem cadastro? <Link to='/cadastrar'>Cadastre-se</Link></span>
            </form>
            </div>

        </div>
    )
}

export default FormLogin