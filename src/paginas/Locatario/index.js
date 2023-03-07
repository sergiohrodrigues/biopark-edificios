import { useContext } from 'react'
import { EdificioContext } from '../../content/Edificio'
import styles from './Locatario.module.css'

export default function Locatario() {
    const { edificio } = useContext(EdificioContext)

    function verDisponibildiades(id) {
        // const idEdificioClicado = id
        // verDisponibildiades2(idEdificioClicado)
        // navigate(`/locatorio/${idEdificio}`)
    }
    
    // function verDisponibildiades2(id){
    //     setIdEdificio(Number(id))
    //     console.log(idEdificio)
    // }

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