import Menu from "../../componentes/Menu"
import "./CadastrarLocais.css"
import { useForm } from "react-hook-form"

function CadastrarLocais() {

    const { register, handleSubmit, formState } = useForm()

    function CadastrarLocal() {
        alert("Local Cadastrado!")
    }

    return (
        <div className="container-locais">

            <Menu />

            <form className='form-criarlocal' onSubmit={handleSubmit(CadastrarLocal)}>

                <div className='titulo-cadastroLocalidade'>
                    <h1>Cadastro de Localidade</h1>
                </div>

                {/* nome local */}
                <div className="input-formlocal">
                    <label htmlFor="inputNomeLocal">Nome do local</label>
                    <input type='text' id="inputNomeLocal" placeholder='Ex. Barra da lagoa' {...register('nomeLocal', { required: "O nome do local é obrigatório" })}
                    ></input >
                    {formState.errors?.nomeLocal?.message}
                </div>


                {/* descrição */}
                <div className='input-formlocal'>
                    <label htmlFor="inputDescricao">Descrição</label>
                    <input type='text' id="inputDescricao" {...register('descricao')}
                    ></input >
                </div>

                {/* CEP */}
                <div className='input-formlocal'>
                    <label htmlFor="cep">CEP</label>
                    <input type='number' placeholder='88061-233' id="cep" {...register('cep', { required: "O CEP é obrigatório" })}
                    ></input >
                    {formState.errors?.cep?.message}
                </div>

                {/* Endereço */}
                <div className='input-formlocal'>
                    <label htmlFor="endereco">Endereço</label>
                    <input type='text' placeholder='informe o endereço' id="endereco" {...register('endereco', { required: "O endereço é obrigatório" })}>
                    </input>
                    {formState.errors?.endereco?.message}
                </div>


                <div className='btn-cadastrarLocal'>
                    <button type='submit'>Cadastrar</button>
                </div>
            </form>


        </div>
    )
}

export default CadastrarLocais