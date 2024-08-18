import Menu from "../../componentes/Menu"
import "./CadastrarLocais.css"
import { useForm } from "react-hook-form"

function CadastrarLocais() {

    const { register, handleSubmit, formState } = useForm()

    async function CadastrarLocal(data) {

        const cep = data.cep

        const local = {
            nomeLocal: data.nomeLocal,
            descricao: data.descricao,
            cep: data.cep
        }

        try {

            if (cep.length === 8) {
                const answer = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
                const dados = await answer.json()

                if (dados.erro) {
                    throw new Error("CEP não encontrado.");
                }

                local.logradouro = dados.logradouro;
                local.bairro = dados.bairro;
                local.cidade = dados.localidade;
                local.estado = dados.uf;

                const resposta = await fetch("http://localhost:3000/locais", {
                    method: "post",
                    body: JSON.stringify(local)
                })

                alert("Local cadastrado com sucesso!!!")
            }
            else {
                throw new Error("CEP inválido.");
            }

        } catch (error) {
            console.error("Erro:", error.message);
            alert(`Erro: ${error.message}`);
        }
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

                <div className='input-formlocal-endereco'>
                    <div className="itens-form-endereco">
                        <label htmlFor="numero">Nº</label>
                        <input type='number' placeholder='informe o número' id="numero" {...register('numero')}>
                        </input>
                        {formState.errors?.numero?.message}
                    </div>

                    <div className="itens-form-endereco">
                        <label htmlFor="bairro">Bairro</label>
                        <input type='text' placeholder='informe o bairro' id="bairro" {...register('bairro', { required: "O bairro é obrigatório" })}>
                        </input>
                        {formState.errors?.bairro?.message}
                    </div>
                </div>


                <div className='btn-cadastrarLocal'>
                    <button type='submit'>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default CadastrarLocais