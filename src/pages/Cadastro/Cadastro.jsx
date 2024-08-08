import './Cadastro.css'
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"

function Cadastro() {

    const { register, handleSubmit, formState } = useForm()
    
    async function criarConta(values){
        try {
            const resposta = await fetch("http://localhost:3000/usuarios", {
                method: "post",
                body: JSON.stringify(values)
            })
            alert("Conta criada com sucesso")
        } catch (error) {
            alert("Houve um erro ao cadastrar o usuario")
        }
    }

    return (

        <div className='containerCriarConta'>

            <div className='container-form-criarConta'>

                <div className='cadastro'>

                    <form className='form-criarconta' onSubmit={handleSubmit(criarConta)}>

                        <div className='titulo-criarConta'>
                            <h1>Criar Conta</h1>
                        </div>

                        <div className='organizarInputs'>
                            <input type='text' placeholder='Nome' {...register('nome', { required: "O nome é obrigatório" })}
                            ></input >
                            {formState.errors?.nome?.message}
                        </div>

                        {/* SEXO */}
                        <div className='organizarInputs'>
                            <input type='text' placeholder='Sexo' {...register('sexo', { required: "O sexo é obrigatório" })}
                            ></input >
                            {formState.errors?.sexo?.message}
                        </div>

                        {/* cpf */}
                        <div className='organizarInputs'>
                            <input type='number' placeholder='CPF' {...register('cpf', { required: "O CPF é obrigatório" })}
                            ></input >
                             {formState.errors?.cpf?.message}
                        </div>

                        {/* Data Nascimento */}
                        <div className='organizarInputs'>
                            <input type='date' placeholder='Data' {...register('DataNascimento', { required: "A data de nascimento é obrigatório" })}
                            ></input >
                            {formState.errors?.DataNascimento?.message}
                        </div>

                        <div className='organizarInputs'>
                            <input type='email' placeholder='Email' {...register('email', { required: "O email é obrigatório" })}>
                            </input>
                            {formState.errors?.email?.message}
                        </div>
  
                        <div className='organizarInputs'>
                            <input type='password' placeholder='Senha' {...register('password', { required: "A senha é obrigatória" })}>
                            </input>
                            {formState.errors?.password?.message}
                        </div>
                        
                        <div className='botao-cadastrar'>
                            <button type='submit'>Cadastrar</button>
                        </div>

                        <span>Já possui conta? <Link to='/'>Faça login</Link></span>
                    </form>
                </div>

                <div className='imagem-cadastre-se'>
                    
                    <img src='https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"'  alt="Árvores" width="100%"></img>

                </div>
            </div>
        </div>
    )
}

export default Cadastro