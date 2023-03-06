import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EdificioProvider } from "./content/Edificio";
import Cadastrar from "./paginas/Cadastrar";
import CadastrarApartamento from "./paginas/CadastrarApartamento";
import CadastrarEdificio from "./paginas/CadastrarEdificio";
import Inicio from "./paginas/Inicio";
import Locatario from "./paginas/Locatario";
import Login from "./paginas/Login";
import PaginaInicial from "./paginas/PaginaInicial";

function App() {
  return (
    <BrowserRouter>
      <EdificioProvider>
        <Routes>
          <Route path="/" element={<PaginaInicial />}>
            <Route index element={<Inicio />} />
            <Route path="/locatario" element={<Locatario />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrar" element={<Cadastrar />} />
            <Route path="/cadastrar/edificio" element={<CadastrarEdificio />} />
            <Route path="/cadastrar/apartamento" element={<CadastrarApartamento />} />
          </Route>
        </Routes>
      </EdificioProvider>
    </BrowserRouter>
  );
}

export default App;