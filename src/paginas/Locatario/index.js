import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { EdificioContext } from '../../content/Edificio'
import styles from './Locatario.module.css'

export default function Locatario() {
    const {edificio} = useContext(EdificioContext)
    const params = useParams()
    const idEdificio = params.id - 1
    const edificioClicado = edificio.find((edif) => edif.id === idEdificio)
    
    return(
        <section className={styles.container}>
                <div className={styles.edificio}>
                    <h2>Edificio: {edificioClicado.edificio}</h2>
                    <img src={edificioClicado.imagem}/>
                    <h3>Locador: {edificioClicado.locador}</h3>
                    <button>Alugar apartamento</button>
                </div>
        </section>
    )
}