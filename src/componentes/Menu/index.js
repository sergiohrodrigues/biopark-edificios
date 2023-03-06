import styles from './Menu.module.css'
import imagem from './logo.png'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <>
            <header className={styles.cabecalho}>
                <Link to="/"><img src={imagem} alt="logo biopark"/></Link>
                <div className={styles.navegacao}>
                    <span>Eu sou um(a)...</span>
                    <Link to="/login">Locador(a)</Link>
                </div>
            </header>
        </>
    )
}