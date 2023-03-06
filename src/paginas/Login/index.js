import { useNavigate } from "react-router-dom"
import styles from './Login.module.css'

export default function Login() {

    const navigate = useNavigate()

    function entrar(event) {
        event.preventDefault()
        navigate("/cadastrar")
    }

    return (
        <>
            <section className={styles.container}>
                <h2>Por favor entre com seu login</h2>
                <form onSubmit={(event) => entrar(event)}>
                    <input type="email" placeholder="Digite seu usuario ou e-mail" required />
                    <input type="password" placeholder="Digite sua senha" required />
                    <button type="submit" className={styles.entrar}>Entrar</button><br />
                    <button type="button" className={styles.voltar} onClick={() => navigate("/")}>Voltar</button>
                </form>
            </section>
        </>
    )
}