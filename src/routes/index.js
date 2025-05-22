import {BrowserRouter, Routes, Route} from "react-router-dom";
import UsuarioForm from "../pages/CadastroUsuario/UsuarioForm/index";
function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index path="/"/>
                <Route path="/novo-usuario" element={<UsuarioForm />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;