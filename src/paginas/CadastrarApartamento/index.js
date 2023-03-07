import { useContext, useState } from 'react'
import styles from './CadastrarApartamento.module.css'
import { EdificioContext } from '../../content/Edificio'
import { useNavigate } from 'react-router-dom'

export default function CadastrarApartamento() {
    const navigate = useNavigate();
    const [quantidadeDeApartamentos, setQuantidadeDeApartamentos] = useState("")
    const { edificio, setEdificio } = useContext(EdificioContext)

    function adicionarApartamentos(e) {
        e.preventDefault();
        const indiceEdificio = document.querySelector("select").value
        const edificioSelecionado = edificio[indiceEdificio]

        if(edificioSelecionado === undefined){
            alert("Por favor selecione um Edificio")
        } else {
            for(let i = 0; i < quantidadeDeApartamentos; i++){
                setEdificio(edificioSelecionado.apartamentos.push({
                    "numero": edificio[indiceEdificio].apartamentos.length + 1,
                    "locatário": "Disponivel",
                    "valor": "250,00"
                }))
            }
        }
        
        navigate("/")
        console.log(edificioSelecionado)
    }
    return (
        <>
            <form className={styles.form} onSubmit={(e) => adicionarApartamentos(e)}>
                <label>Selecione o Edificio</label><br />
                <select>
                    <option value=""></option>
                    {edificio.map((edif) => (
                        <option value={edif.id} key={edif.id}>{edif.edificio}</option>
                    ))}
                </select><br />
                <label>Quantos apartamentos deseja adicionar
                    <input type="number" onChange={(e) => setQuantidadeDeApartamentos(e.target.value)} />
                </label>
                <p id='sucess'></p>
                <button>Cadastrar</button><br />
                <button onClick={(e) => navigate("/cadastrar")}>Voltar</button>
            </form>
        </>
    )
}