import styles from './CadastrarEdificio.module.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { EdificioContext } from '../../content/Edificio'

export default function CadastrarEdificio() {
    const { edificio, setEdificio, nome, setNome } = useContext(EdificioContext)
    const navigate = useNavigate()

    function Cadastrar(e) {
        e.preventDefault()
        const nomeDiferente = edificio.some((predio) => predio.edificio === nome)
        let indice = edificio.length - 1

        if (nomeDiferente !== true && nome.length !== 0) {
            adicionarEdificio(indice)
            // adicionarImagem()
        } if (nomeDiferente === true) {
            alert("Esse Edificio ja existe por favor digite outro nome")
        } if (nome.length === 0) {
            alert("Por favor digite o nome do Edificio")
        }

        document.querySelector("#input").value = ""
        // document.querySelector("#url").value = ""
    }

    function adicionarEdificio(indice) {
        setEdificio([...edificio, {
            "id": indice + 1,
            "edificio": nome,
            "locador": "Biopark",
            "imagem": "/imagens/edificio1.jpg",
            "apartamentos": [{
                "numero": 1,
                "locatário": "Disponivel",
                "valor": "450,00"
            }]
        }])
        document.querySelector("#sucess").innerHTML = "Edificio criado com sucesso, volte para adicionar apartamentos."
    }

    // function adicionarImagem(){
    //     setImagem(document.querySelector("#url").value)
    //     console.log("nome:" + nome, "imagem:" + imagem)
    // }

    return (
        <form className={styles.form} onSubmit={(e) => Cadastrar(e)}>
            <label>Nome do Edificio
                <input onChange={(event) => setNome(event.target.value)} id="input" />
            </label>
            {/* <label>Inserir url da imagem em jpg
                <input id="url"/>
            </label> */}
            <p id='sucess'></p>
            <button id='cadastrado'>Cadastrar</button><br />
            <button onClick={() => navigate("/cadastrar")}>Voltar</button>
        </form>
    )
}