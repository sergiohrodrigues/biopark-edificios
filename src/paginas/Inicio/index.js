import Edificios from '../../componentes/Edificios'
import styles from './Inicio.module.css'

export default function Inicio() {

    return (
        <main className={styles.container}>
            <h2>Edificios Disponiveis</h2>
            <Edificios />
        </main>
    )
}