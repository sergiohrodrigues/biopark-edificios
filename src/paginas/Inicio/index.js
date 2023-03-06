import { useNavigate, useParams } from 'react-router-dom'
import styles from './Inicio.module.css'
import { useContext } from 'react'
import { EdificioContext } from '../../content/Edificio'

export default function Inicio() {
    const { edificio } = useContext(EdificioContext)

    const navigate = useNavigate()
    const params = useParams()

    function verDisponibildiades(id) {
        console.log(params.id, id)
        navigate("/locatario")
    }

    return (
        <main className={styles.container}>
            {edificio.map((ed) => (
                <section key={ed.id} className={styles.edificio}>
                    <img src={ed.imagem} alt={`Edificio ${ed.edificio}`} />
                    <h2>Edificio: {ed.edificio}</h2>
                    <h3>Locador: {ed.locador}</h3>
                    <button onClick={() => verDisponibildiades(ed.id)}>Ver disponibilidades</button>
                </section>
            ))}
        </main>
    )
}