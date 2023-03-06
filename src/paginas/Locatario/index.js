import { useNavigate, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { EdificioContext } from '../../content/Edificio'
import styles from './Locatario.module.css'

export default function Locatario() {
    const { edificio, idEdificio, setIdEdificio } = useContext(EdificioContext)

    const navigate = useNavigate()
    const params = useParams()

    function verDisponibildiades(id) {
        // const idEdificioClicado = id
        // verDisponibildiades2(idEdificioClicado)
        // navigate(`/locatorio/${idEdificio}`)
    }
    
    function verDisponibildiades2(id){
        setIdEdificio(Number(id))
        console.log(idEdificio)
    }

    return (
        <>
            {edificio.map((ed) => (
                <section key={ed.id} className={styles.edificio}>
                    <img src={ed.imagem} alt={`Edificio ${ed.edificio}`} />
                    <h2>Edificio: {ed.edificio}</h2>
                    <h3>Locador: {ed.locador}</h3>
                    <button onClick={() => verDisponibildiades(ed.id)}>Ver disponibilidades</button>
                </section>
            ))}
        </>
    )
}