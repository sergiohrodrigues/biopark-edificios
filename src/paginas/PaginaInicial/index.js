import { Outlet } from "react-router-dom";
import Footer from "../../componentes/Footer";
import Menu from "../../componentes/Menu";

export default function PaginaInicial() {
    return (
        <>
            <Menu />
                <Outlet />
            <Footer />
        </>
    )
}