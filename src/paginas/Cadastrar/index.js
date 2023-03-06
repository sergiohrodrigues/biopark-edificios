import { useNavigate } from "react-router-dom"
import styles from './Cadastrar.module.css'

export default function Cadastrar() {
    const navigate = useNavigate()
    return (
        <>
            <section className={styles.cadastrar}>
                <h2>Você deseja:</h2>
                <button className={styles.btnCadastrar} onClick={() => navigate("/cadastrar/edificio")}>Cadastrar Edificio</button><br />
                <button className={styles.btnCadastrar} onClick={() => navigate("/cadastrar/apartamento")}>Cadastrar Apartamentos</button><br/>
                <button className={styles.voltar} onClick={() => navigate("/login")}>Voltar</button>
            </section>
        </>
    )
}