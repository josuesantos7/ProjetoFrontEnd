import "./Locais.css"
import React, { useState, useEffect } from 'react';
import Menu from "../../componentes/Menu"
import { Link } from "react-router-dom";
import { Button, Modal } from 'react-bootstrap';
import { useForm } from "react-hook-form"

function Locais() {
    const [locais, setLocais] = useState([]);
    const [show, setShow] = useState(false);
    const [localSelecionado, setLocalSelecionado] = useState(null);

    const { register, handleSubmit, reset, formState: { errors }, formState } = useForm();

    useEffect(() => {
        obterLocais();
    }, []);

    async function obterLocais() {
        try {
            const resposta = await fetch("http://localhost:3000/locais", {
                method: "GET"
            });

            if (!resposta.ok) {
                throw new Error("Erro ao buscar os locais.");
            }

            const dados = await resposta.json();
            setLocais(dados);
        } catch (error) {
            console.error("Erro:", error.message);
            alert(`Erro: ${error.message}`);
        }
    }

    async function deleteLocal(id) {
        try {
            const resposta = await fetch(`http://localhost:3000/locais/${id}`, {
                method: "DELETE"
            });

            if (!resposta.ok) {
                throw new Error("Erro ao deletar o local!");
            }

            // atualiza meus locais html
            setLocais(locais.filter(local => local.id !== id));
        } catch (error) {
            console.error("Erro:", error.message);
            alert(`Erro: ${error.message}`);
        }
    }

    const handleShow = (local) => {
        setLocalSelecionado(local);
        reset(local);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setLocalSelecionado(null);
    };

    async function atualizarLocal(data) {
        try {
            const resposta = await fetch(`http://localhost:3000/locais/${localSelecionado.id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!resposta.ok) {
                throw new Error("Erro ao atualizar o local.");
            }

            // atualiza lista html
            setLocais(locais.map(local => local.id === localSelecionado.id ? { ...local, ...data } : local));

            handleClose();
        } catch (error) {
            console.error("Erro:", error.message);
            alert(`Erro: ${error.message}`);
        }
    }

    return (
        <div className="containerLocais">
            <div>
                <Menu />
            </div>

            <div className="main-locais">

                <div className='titulo-locais'>
                    <h1>Locais</h1>
                    <Link to="/CadastrarLocais"><button className="button-cadastrarNewLocal">Cadastrar Local</button></Link>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Local</th>
                            <th>Descrição</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {locais.length > 0 ? (
                            locais.map((local, index) => (
                                <tr key={index}>
                                    <td>{local.nomeLocal}</td>
                                    <td>{local.descricao}</td>
                                    <td>
                                        <div className="edit-delete">
                                            <button onClick={() => handleShow(local)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                                                </svg>
                                            </button>

                                            <button onClick={() => deleteLocal(local.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3">Nenhum local encontrado</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Atualizar Local</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="form-criarlocal" onSubmit={handleSubmit(atualizarLocal)}>
                            <div className="titulo-cadastroLocalidade">
                                <h1>Cadastro de Localidade</h1>
                            </div>

                            {/* nome local */}
                            <div className="input-formlocal">
                                <label htmlFor="inputNomeLocal">Nome do local</label>
                                <input
                                    type="text"
                                    id="inputNomeLocal"
                                    placeholder="Ex. Barra da lagoa"
                                    {...register("nomeLocal", {
                                        required: "O nome do local é obrigatório",
                                    })}
                                />
                                {errors?.nomeLocal?.message && <span>{errors.nomeLocal.message}</span>}
                            </div>

                            {/* descrição */}
                            <div className="input-formlocal">
                                <label htmlFor="inputDescricao">Descrição</label>
                                <input type="text" id="inputDescricao" {...register("descricao")} />
                            </div>

                            {/* CEP */}
                            <div className="input-formlocal">
                                <label htmlFor="cep">CEP</label>
                                <input
                                    type="number"
                                    placeholder="88061-233"
                                    id="cep"
                                    {...register("cep", {
                                        required: "O CEP é obrigatório",
                                    })}
                                />
                                {errors?.cep?.message && <span>{errors.cep.message}</span>}
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

                            <div className="btn-cadastrarLocal">
                                <button type="submit">Atualizar</button>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

export default Locais;