import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { EdificioContext } from '../../content/Edificio'
import styles from './Edificios.module.css'


export default function Edificios() {

    const { edificio } = useContext(EdificioContext)

    // const apartamentosDisponiveis = edificio.some((edif) => edif)

    // console.log(edificio[0].apartamentos[0].locatario !== "disponivel")

    return (
        <>
            {edificio.map((ed) => (
                <section key={ed.id} className={styles.edificio}>
                    <img src={ed.imagem} alt={`Edificio ${ed.edificio}`} />
                    <h2>Edificio: {ed.edificio}</h2>
                    <h3>Locador: {ed.locador}</h3>
                    <h4>Apartamentos disponiveis: {ed.apartamentos.length}</h4>
                    <Link to={`/${ed.id + 1}`}><button>Alugar apartamento</button></Link>
                </section>
            ))
            }
        </>
    )
}