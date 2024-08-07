import './Cadastro.css'
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"

function Cadastro() {

    const { register, handleSubmit, formState } = useForm()
    
    function criarConta(){
        alert("Conta criada com sucesso")
    }

    return (

        <div className='container'>

            <div className='container-form-criarConta'>

                <div className='cadastro'>

                    <form className='form-criarconta' onSubmit={handleSubmit(criarConta)}>
                        <h1>Criar Conta</h1>


                        <div className='organizarInputs'>
                            <input type='text' placeholder='Nome' {...register('nome', { required: "O nome é obrigatório" })}
                            ></input >
                            
                        </div>
                        {formState.errors?.nome?.message}

                        {/* SEXO */}
                        <div className='organizarInputs'>
                            <input type='text' placeholder='Sexo' {...register('sexo', { required: "O sexo é obrigatório" })}
                            ></input >
                            
                        </div>
                        {formState.errors?.sexo?.message}

                        {/* cpf */}
                        <div>
                            <input type='number' placeholder='CPF' {...register('cpf', { required: "O CPF é obrigatório" })}
                            ></input >
                            
                        </div>
                        {formState.errors?.cpf?.message}

                        {/* Data Nascimento */}
                        <div>
                            <input type='date' placeholder='Data' {...register('DataNascimento', { required: "A data de nascimento é obrigatório" })}
                            ></input >
                            
                        </div>
                        {formState.errors?.DataNascimento?.message}

                        <div>
                            <input type='email' placeholder='Email' {...register('email', { required: "O email é obrigatório" })}>
                            </input>
                            
                        </div>
                        {formState.errors?.email?.message}

                        <div>
                            <input type='password' placeholder='Senha' {...register('password', { required: "A senha é obrigatória" })}>
                            </input>
                            
                        </div>
                        {formState.errors?.password?.message}
                        

                        <button type='submit'>Cadastrar</button>

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